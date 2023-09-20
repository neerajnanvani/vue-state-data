<template>
    <div >
        <nav class="flex w-full justify-center space-x-6 h-10 p-auto border-b-2 items-center">
            <router-link 
                class="font-semibold text-zinc-400 hover:text-zinc-100 hover:border-b-slate-100 hover:border-b-2" 
                to="/"
            >
                Task one
            </router-link>
            <router-link
                class="font-semibold text-zinc-400 hover:text-zinc-100 hover:border-b-slate-100 hover:border-b-2"
                to="/two"
            >
                Task two
            </router-link>
            <router-link
                class="font-semibold text-zinc-400 hover:text-zinc-100 hover:border-b-slate-100 hover:border-b-2"  
                to="/three"
            >
                Task three
            </router-link>
        </nav>
        <main>
            <slot />
        </main>
    </div>
</template>