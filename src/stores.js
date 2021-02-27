import { writable } from 'svelte/store'

export const questions = writable('')
export const setToken = writable('')
export const score = writable([false, false, false, false, false, false, false, false, false, false])