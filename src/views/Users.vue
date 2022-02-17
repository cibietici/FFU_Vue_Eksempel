<template>
    <Header title="users" list="20" />
    <h1>{{ title }}</h1>
    <input type="text" v-model="nameValue">
    <span>{{ nameValue }}</span>
    <span>{{ personEmail }}</span>
    <ul>
        <li v-for="person in people" :key="person.id.value">
            {{ person.name.first }} {{ person.name.last }}
        </li>
    </ul>
    <button @click="fetchData" class="button-getnew">Get new list</button>
    <button @click="findPerson">get email</button>
    <button @click="onlyMale">Only male</button>
    <button @click="sortAlpha">Sorting</button>
</template>

<script>
import Header from '../components/Header.vue';

export default {
    name: 'users',
    components: {
        Header
    },
    data() {
        return {
            title: 'Users list',
            nameValue: '',
            people: [],
            personEmail: '',
            data: {},
            articles: { // Vi kan ha objekter også
                title: 'title',
                articles: [
                    {tit: 1, body: 'bod1'},
                    {tit: 2, body: 'bod2'},
                    {tit: 3, body: 'bod3'},
                ]
            }
        }
    },
    created() {
        this.fetchData();
        this.sumThis();
    },
    methods: {
        async fetchData() {
            const url = 'https://randomuser.me/api/?page=2&results=20';
            const response = await fetch(url);
            // vi kan deconstruct hele objekt response inn i de to objekter returnert
            // JS sørge på at både results og info er to variabler vi kan bruke 
            const { results, info } = await response.json();
            console.log(info);

            this.people = results;
            
            // vi sjekker her om enviromental variabler er lastet inn korrekt fra .env filer
            const client_id_key = import.meta.env.VITE_UNPLASH_ACCES_KEY;
            console.log(client_id_key)

            /*
            const unsplashApi = `https://api.unsplash.com/photos/random?client_id=${client_id_key}`
            const responseUnsplash = await fetch(unsplashApi);
            // decunstruct urls verdi i objekten fra http response
            const  { urls }  = await responseUnsplash.json();

            console.log(urls.regular) 
            */
        },
        findPerson() {
            const person = this.people.find(user => {
                return user.name.first === this.nameValue;
            });
            this.personEmail = person.email
        },
        onlyMale() {
            const genderList = this.people.filter(user => {
                return user.gender === 'male';
            })
            this.people = genderList;
        },
        sortAlpha() {
            const sortedData = this.people.sort((a, b) => {
                if (a.name.last > b.name.last) return 1;
                if (a.name.last < b.name.last) return -1;
                return 0;
            });
            this.people = sortedData;
        },
        // reduce eksempel
        sumThis() {
            const numbers = [1, 4, 6, 9];
            const sum = numbers.reduce((result, numb) => {
                return numb + result;
            }, 10);
            console.log(sum);
        }
    }
}

</script>

<style scoped>
    .button-getnew, button { /* virker både med classname og tag selector */
        padding: 20px;
        background-color: blanchedalmond;
    }
    input {
        padding: 20px;
        background-color: burlywood;
    }
</style>
