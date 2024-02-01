<script setup>
import { Form, Field } from 'vee-validate';
import { login_schema } from '../../models/loginSchema';

function onSubmit(){
    console.log('Form yuborildi...');
}
</script>

<template>
    <div class="p-8 rounded-lg box-shadow">
        <div class="title py-2 px-4 bg-blue-100 flex items-center mb-4 rounded-lg">
            <i class='bx bx-lock-open-alt text-[40px] text-gray-600 mr-3'></i>
            <div class="text-gray-600">
                <h1 class="text-xl font-semibold mb-1">Login</h1>
                <p class="text-sm">Please enter your data to login.</p>
            </div>
        </div>
        <Form action="#" class="block w-full" @submit="onSubmit" :validation-schema="login_schema" v-slot="{ errors }" >
            <div class="form-item mb-3">
                <label class="text-sm text-gray-700 font-semibold">Username</label>
                <Field 
                    name="userEmail" 
                    type="email" 
                    class="my-1 outline-none border border-gray-400 ring-0 rounded px-4 py-2 block w-full" 
                    :class="{ 'is-invalid': errors.userEmail }" 
                    placeholder="example@gmail.com"
                />
                <p class="text-xs text-red-600" v-if="errors.userEmail">{{ errors.userEmail }}</p>
            </div>
            <div class="form-item mb-5">
                <label class="text-sm text-gray-700 font-semibold">Password</label>
                <Field 
                    name="userPassword" 
                    type="password" 
                    class="my-1 outline-none border border-gray-400 ring-0 rounded px-4 py-2 block w-full" 
                    :class="{ 'is-invalid': errors.userPassword }" 
                    placeholder="******"
                />
                <p class="text-xs text-red-600" v-if="errors.userPassword">{{ errors.userPassword }}</p>
            </div>
            <div class="flex justify-between items-center">
                <div>
                    <input type="reset"  class="py-2 px-4 bg-blue-500 text-white rounded mr-2 text-sm" value="Reset">
                    <input type="submit"  class="py-2 px-4 bg-green-500 text-white rounded text-sm" value="Login">
                </div>
                <router-link to="/admin/register" class="text-blue-500">Register now</router-link>
            </div>
        </Form>
    </div>
</template>


<style scoped></style>