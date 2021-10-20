const SomeApp = {
    data() {
      return {
        books: []
      }
    },
    computed: {},
    methods: {
        prettyDollar(n) {
            const d = new Intl.NumberFormat("en-US").format(n);
            return "$ " + d;
        },
        fetchStudentData() {
            fetch('/api/books/')
            .then( response => response.json() )
            .then( (responseJson) => {
                //console.log(responseJson);
                this.books = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
        },
    },
    created() {
        this.fetchStudentData();
    }
  
  }
  
  Vue.createApp(SomeApp).mount('#offerApp');
  