import { url} from './modules/vars.js'
import { getData } from './modules/data.js'

import { renderHTML } from './modules/render.js'
import { showandhideArticles } from './modules/showandhide.js'
import { generateObserver } from './modules/observer.js'
import { searchBalk, search } from './modules/searchBalk.js'
import { displayLoading, hideLoading } from './modules/loading.js'


getData(url)
