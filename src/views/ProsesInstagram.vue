<template>
    <div class="wrapper">
    <br><br><br><br><br><br><br>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
              
                <h3>Halo {{emailUser}}</h3>
            <md-field class="md-form-group" slot="inputs">
            <md-icon>link</md-icon>
            <label>Silahkan Masukan Link Instagram Anda</label>
            <md-input v-model="link" @keyup.13="proses"></md-input>
            </md-field>
            <div class="col-md-6">
              <md-button slot="footer" class="md-simple md-danger md-lg" @click="proses">
                Kirim
              </md-button>
                
              </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
    data(){
        return {
            loading : true,
            color : 'success',
            size : '50px',
            link : ""
        }
    },
    components : {
       
    },
    methods : {
        proses(){
            if(!this.link){
                this.$swal({
                    icon : 'error',
                    title : 'Maaf !',
                    text : 'Data Tidak Boleh Kosong'
                })
            }else{
                let timerInterval
                this.$swal({
                    title: 'Sedang Melakukan Proses!',
                    html: 'Proses Akan Selesai Pada <b></b> milliseconds.',
                    timer: 120000,
                    timerProgressBar: true,
                    onBeforeOpen: () => {
                        this.$swal.showLoading()
                        timerInterval = setInterval(() => {
                        const content = this.$swal.getContent()
                        if (content) {
                            const b = content.querySelector('b')
                            if (b) {
                            b.textContent = this.$swal.getTimerLeft()
                            }
                        }
                        }, 100)
                    },
                    onClose: () => {
                        clearInterval(timerInterval)
                    }
                    }).then((result) => {
                        this.$swal({
                            icon : 'success',
                            text : 'Proses Berhasil Silahkan Cek Sosmed Anda',
                            title : 'Selamat !'
                        }).
                        then(result => {
                            if(result.value){
                                this.$swal({
                                    icon : 'warning',
                                    title : 'Warning',
                                    text : 'Jika Tidak Berhasil Silahkan Kontak Saya :)'
                                })
                            }
                        })
                   
                })
            }
           
        }
    },
    computed : {
        emailUser(){
            let email = localStorage.getItem('email')
            return email
        }
    }
}
</script>

<style scoped>

</style>