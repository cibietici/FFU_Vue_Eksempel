<template>
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

export default {
    name: 'users',
    data() {
        return {
            title: 'Users list',
            nameValue: '',
            people: [],
            personEmail: '',
            clientID: import.meta.env.VITE_CLIENT_ID,
            data: {},
            obj: {
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
            const options = {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json'
                },
                //body: JSON.stringify(this.data) // bare hvis method er POST
            };
            const res = await fetch(url, options);
            const { results } = await res.json();
            this.people = results;
            console.log(this.clientID);
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
