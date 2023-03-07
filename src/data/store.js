import { reactive } from "vue";

export const store = reactive({
      allResults: [],
      moviesArray: [],
      seriesArray: [],
      contentFound: true,
      isPageLoading: false
})