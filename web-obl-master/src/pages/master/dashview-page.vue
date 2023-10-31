<template>
    <div class="w-screen h-screen flex">
    <!-- Side bar -->
    <div class="w-[350px] h-screen bg-gray-200 text-white" v-show="showSide">
        <div class="h-[100px] bg-red-800 flex items-center justify-center">
            <div>
            <img src="../master/logotelkom.png" alt="Logo" class="w-35 h-20" />
            </div>
        </div>
        <div class="h-[calc(100vh-50px)] bg-red-800 py-[20px]">
        <div class="flex flex-col justify-between h-full px-[20px] space-y-[10px]">
            <div class=" flex flex-col justify-between space-y-[10px]">
            <router-link to="/profile" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">
                <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path>
                </svg>
                Profile
            </router-link>
            <router-link to="/dashview" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
                <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
                </svg>
                Dashboard
            </router-link>
            </div>
        </div>
        </div>
    </div>
    <div class="w-full h-full bg-gray-400">
        <div class="h-[50px] bg-gray-100 flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b ">
        <!-- Hambuger menu -->
        <div class="cursor-pointer w-[30px]" @click="toggleSideBar">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class=" w-[25px] h-[25px]">
            <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
        </div>
        <!-- Search bar -->
        <div class="w-[calc(100%-30px)] flex">
            <div class="w-[calc(100%-200px)] flex justify-center ">
            <!-- Search bar -->
            <form class="flex items-center w-[500px]">
                <label for="voice-search" class="sr-only">Search</label>
                <div class="relative w-full">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-auto text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                    </svg>
                </div>
                <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required>
                <router-link to="/" class="flex absolute inset-y-0 right-0 items-center pr-3">
                    <svg aria-hidden="true" class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"></path>
                    </svg>
                </router-link>
                </div>
            </form>
            </div>
            
            <!-- User login -->
            <div class="w-[200px] ">
            <div class="flex items-center justify-start space-x-4" @click="toggleDrop">
                <img class="w-10 h-10 rounded-full border-2 border-gray-50" src="https://assets-a1.kompasiana.com/items/album/2021/03/24/blank-profile-picture-973460-1280-605aadc08ede4874e1153a12.png?t=o&v=1200" alt="">
                <div class="font-semibold dark:text-white text-left">
                <div>Azwar ,Dev OP</div>
                <div class="text-xs text-gray-500 dark:text-gray-400">Admin</div>
                </div>
            </div>
            <!-- Drop down -->
            <div v-show="showDropDown" class="absolute right-[10px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div class="py-1 text-left" role="none">
                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                <a href="/" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</a>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div class="h-[calc(100vh-50px)] bg-gray-50 p-[20px]">
        <div class="border border-gray-300 rounded-md p-[20px] h-full">
            <div class="flex justify-between items-center mb-4">
                <h1 class="text-2xl font-bold">Your Documents</h1>
            </div>
                <router-view> 
                <div class="grid grid-cols-2 gap-4">
                <div v-for="(document, index) in documents" :key="index" class="bg-red-800 p-4 rounded-md shadow-md hover:shadow-lg transition-transform transform hover:scale-105 relative overflow-hidden" @click="goToNextPage(document)">
                <div class="animate-wave absolute top-0 left-0 w-full h-full bg-red-800 opacity-20"></div>
                    <h2 class="text-lg font-semibold text-white relative z-10">{{ document.title }}</h2>
                    <p class="mt-2 text-gray-300 relative z-10">{{ document.content }}</p>
                    <!-- <button @click="editDocument(index)" class="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 hover:shadow-md transition-transform transform hover:scale-105 relative z-10">Edit</button> -->
                </div>
                </div>
            </router-view>
        </div>
        </div>
    </div>
    <!-- Main  -->
    </div>
</template>

<script>
export default {
data() {
    return {
    documents: [
        {
        title: 'Polda NTB',
        content: 'Azwar Syifa',
        },
        {
        title: 'Hotel Santika',
        content: 'Syifa Mufiqi',
        },
    ],
    
    showDropDown: false,
    showSide: true,
    };
    function showPopup(document) {
    // Tampilkan pop up detail dokumen
    this.$refs.popup.open(document);
}
},
methods: {
    
    toggleSideBar() {
    this.showSide = !this.showSide;
    },
    toggleDrop() {
    this.showDropDown = !this.showDropDown;
    },
    goToNextPage(document) {
      // Implement logic to navigate to the next page when a document is clicked.
      // You can use Vue Router or another routing mechanism for this.
      // For example, using Vue Router:
      this.$router.push({ name: 'Foldview-page', params: { document } });
    },
    
},

};
</script>


