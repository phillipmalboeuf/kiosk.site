import { writable } from 'svelte/store'
import type { LayoutData } from '../routes/$types'

export const content = writable<LayoutData["content"]>(undefined)