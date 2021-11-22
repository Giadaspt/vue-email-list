

const root = new Vue({

  el: '#root',

  data: {
    emails: [],
    error: false,
    loading: true,
  },

  mounted(){
    this.getEmail();

  },

  methods: {
    getEmail(){
      this.loading = true; 
      this.emails = [];

      for(let i = 0; i < 10; i++){
        
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
          // console.log(response);
    
          let resp = response.data;
  
          this.emails.push(resp.response)

          if(this.emails.length === 10){
            this.loading = false; 
          } else {
            this.loading = true; 
          }
    
          console.log('dopo',resp);
          console.log(resp.response);
        })

        .catch((error) => {
          this.error= true;
          console.log("gotta catch 'em all",error);
        })
    }

  },

  },

});
