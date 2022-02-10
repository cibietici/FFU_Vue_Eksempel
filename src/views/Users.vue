<template>
    <h1>Users list</h1>
    <input type="text" v-model="textValue">
    <span>{{ textValue }}</span>
    <span>{{ resultFind.email ? resultFind.email : 'no email' }}</span>
    <ul>
        <li v-for="user in people" :key="user.id.value">
            {{ user.name.first }} {{user.name.last}}
        </li>
    </ul>
    <button @click="fetchdata" :class="{ active: isActive }">Get new list</button>
    <button @click="onlyMen" :class="[isError ? errorClass : activeClass]">Only men</button>
    <button @click="onlyFemale" :style="{ color: '#000', borderRadius: '20px'}">Only women</button>
    <button @click="findWho" :class="[isError ? errorClass : activeClass]">Find email</button>
    <button @click="sortName" :class="[isError ? errorClass : activeClass]">Sort</button>
</template>

<script>
export default {
    name: 'users',
    data() {
        return {
          people: [],
          textValue: '',
          isActive: true,
          isError: false,
          activeClass: 'active',
          errorClass: 'error',
          resultFind: []
        }
    },
    created() {
        this.fetchdata();
    },
    mounted() {
        this.textValue = ''
    },
    methods: {
        async fetchdata() {
            const url = 'https://randomuser.me/api/?page=2&results=10';
			const res = await fetch(url);
			const { results }   = await res.json();
            this.people = results;
        },
        onlyMen() {
            const men = this.people.filter(user => {
                return user.gender === 'male';
            });
            this.people = men;
        },
        onlyFemale() {
            const women = this.people.filter(user => {
                return user.gender === 'female'
            });
            this.people = women;
        },
        findWho() {
            const result = this.people.find(user =>{
                return user.name.first === this.textValue;
            });
            console.log(result)
            this.resultFind = result;
        },
        sortName() {
            const sorted = this.people.sort((a, b) => {
                if(a.name.first > b.name.first) return 1;
                if(a.name.first < b.name.first) return -1;
                return 0;
            });
            this.people = sorted;
        }
    }
}
</script>

<style scoped>
input {
    background-color: #fff;
}
button {
    background-color: brown;
    padding: 20px;
    color: #fff;
}

.active {
    background-color: aqua;
    color: #000;
}
.error {
    background-color: rgb(189, 34, 142);
    color: rgb(255, 255, 255);
}
</style>
