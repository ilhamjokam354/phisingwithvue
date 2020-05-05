<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title">Instagram</h1>
            <h4>
              Jasa Followers, Boom Like, Boom Comment IG.
              <br>
              Gratis.
            </h4>
            <br />
            
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="row">
            <v-card
              :loading="loading"
              class="mx-auto my-12"
              max-width="374"
              style="margin-bottom:20px;"
            >
              <v-img
                height="250"
                src="https://res.cloudinary.com/dvk9bvjrh/image/upload/v1587982706/follow-1277029_1920_q4z5sc.png"
              ></v-img>

              <v-card-title>Tambah Followers</v-card-title>

              <v-card-text>
                <v-row
                  align="center"
                  class="mx-0"
                >
                </v-row>

                <div class="my-4 subtitle-1">
                  500 Followers
                </div>

                <div>Followers Mix Worldwide</div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-title>Limit Hanya Per Akun 1 Hari 1 Kali</v-card-title>

              <v-card-actions>
                <v-btn
                  color="deep-purple lighten-2"
                  text
                  @click="pilih"
                >
                  Pilih
                </v-btn>
              </v-card-actions>
            </v-card>
            <v-card
              :loading="loading"
              class="mx-auto my-12"
              max-width="374"
              style="margin-bottom:20px;"
            >
              <v-img
                height="250"
                src="https://res.cloudinary.com/dvk9bvjrh/image/upload/v1587982706/follow-1277029_1920_q4z5sc.png"
              ></v-img>

              <v-card-title>Tambah Followers</v-card-title>

              <v-card-text>
                <v-row
                  align="center"
                  class="mx-0"
                >
                </v-row>

                <div class="my-4 subtitle-1">
                  1000 Followers
                </div>

                <div>Followers Mix Worldwide Real</div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-title>Limit Hanya Per Akun 1 Hari 1 Kali</v-card-title>

              <v-card-actions>
                <v-btn
                  color="deep-purple lighten-2"
                  text
                  @click="soldOut"
                >
                  Sold Out
                </v-btn>
              </v-card-actions>
            </v-card>
            <v-card
              :loading="loading"
              class="mx-auto my-12"
              max-width="374"
              style="margin-bottom:20px;"
            >
              <v-img
                height="250"
                src="https://res.cloudinary.com/dvk9bvjrh/image/upload/v1587982706/follow-1277029_1920_q4z5sc.png"
              ></v-img>

              <v-card-title>Tambah Followers</v-card-title>

              <v-card-text>
                <v-row
                  align="center"
                  class="mx-0"
                >
                </v-row>

                <div class="my-4 subtitle-1">
                  1000 Followers
                </div>

                <div>Followers Mix Worldwide</div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-title>Limit Hanya Per Akun 1 Hari 1 Kali</v-card-title>

              <v-card-actions>
                <v-btn
                  color="deep-purple lighten-2"
                  text
                  @click="soldOut"
                  
                >
                  Sold Out
                </v-btn>
              </v-card-actions>
            </v-card>
   
          </div>
          
          <div class="row" style="margin-top:20px;">
            <v-card
              :loading="loading"
              class="mx-auto my-12"
              max-width="374"
              style="margin-bottom:20px;"
            >
              <v-img
                height="250"
                src="https://res.cloudinary.com/dvk9bvjrh/image/upload/v1587982707/instagram-3814079_yoqoah.png"
              ></v-img>

              <v-card-title>Boom Like</v-card-title>

              <v-card-text>
                <v-row
                  align="center"
                  class="mx-0"
                >
                </v-row>

                <div class="my-4 subtitle-1">
                  50 Like
                </div>

                <div>Hanya Bisa Boom Like Post Sendiri</div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-title>Limit Hanya Per Akun 1 Hari 1 Kali</v-card-title>

              <v-card-actions>
                <v-btn
                  color="deep-purple lighten-2"
                  text
                  @click="pilih"
                >
                  Pilih
                </v-btn>
              </v-card-actions>
            </v-card>
            <v-card
              :loading="loading"
              class="mx-auto my-12"
              max-width="374"
              style="margin-bottom:20px;"
            >
              <v-img
                height="250"
                src="https://res.cloudinary.com/dvk9bvjrh/image/upload/v1587982707/instagram-3814079_yoqoah.png"
              ></v-img>

              <v-card-title>Boom Like</v-card-title>

              <v-card-text>
                <v-row
                  align="center"
                  class="mx-0"
                >
                </v-row>

                <div class="my-4 subtitle-1">
                  200 Like
                </div>

                <div>Hanya Bisa Boom Like Post Orang</div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-title>Limit Hanya Per Akun 1 Hari 1 Kali</v-card-title>

              <v-card-actions>
                <v-btn
                  color="deep-purple lighten-2"
                  text
                  @click="soldOut"
                >
                  Sold Out
                </v-btn>
              </v-card-actions>
            </v-card>
            <v-card
              :loading="loading"
              class="mx-auto my-12"
              max-width="374"
              style="margin-bottom:20px;"
            >
              <v-img
                height="250"
                src="https://res.cloudinary.com/dvk9bvjrh/image/upload/v1587982706/follow-1277029_1920_q4z5sc.png"
              ></v-img>

              <v-card-title>Tambah Followers</v-card-title>

              <v-card-text>
                <v-row
                  align="center"
                  class="mx-0"
                >
                </v-row>

                <div class="my-4 subtitle-1">
                  50 Followers
                </div>

                <div>Followers Mix Worldwide</div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-title>Limit Hanya Per Akun 1 Hari 1 Kali</v-card-title>

              <v-card-actions>
                <v-btn
                  color="deep-purple lighten-2"
                  text
                  @click="pilih"
                >
                  Pilih
                </v-btn>
              </v-card-actions>
            </v-card>

          </div>

          <div class="row" style="margin-top:20px;">
            <v-card
              :loading="loading"
              class="mx-auto my-12"
              max-width="374"
              style="margin-bottom:20px;"
            >
              <v-img
                height="250"
                src="https://res.cloudinary.com/dvk9bvjrh/image/upload/v1588065422/Instalike-shop-service-comments-instagram-280x280_dndy3y.png"
              ></v-img>

              <v-card-title>Boom Comments</v-card-title>

              <v-card-text>
                <v-row
                  align="center"
                  class="mx-0"
                >
                </v-row>

                <div class="my-4 subtitle-1">
                  50 Comments
                </div>

                <div>Hanya Bisa Boom Comments Post Orang</div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-title>Limit Hanya Per Akun 1 Hari 1 Kali</v-card-title>

              <v-card-actions>
                <v-btn
                  color="deep-purple lighten-2"
                  text
                  @click="pilih"
                >
                  Pilih
                </v-btn>
              </v-card-actions>
            </v-card>
            <v-card
              :loading="loading"
              class="mx-auto my-12"
              max-width="374"
              style="margin-bottom:20px;"
            >
              <v-img
                height="250"
                src="https://res.cloudinary.com/dvk9bvjrh/image/upload/v1588065422/Instalike-shop-service-comments-instagram-280x280_dndy3y.png"
              ></v-img>

              <v-card-title>Boom Comments</v-card-title>

              <v-card-text>
                <v-row
                  align="center"
                  class="mx-0"
                >
                </v-row>

                <div class="my-4 subtitle-1">
                  100 Comments
                </div>

                <div>Hanya Bisa Boom Comments Post Orang</div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-title>Limit Hanya Per Akun 1 Hari 1 Kali</v-card-title>

              <v-card-actions>
                <v-btn
                  color="deep-purple lighten-2"
                  text
                  @click="pilih"
                >
                  Pilih
                </v-btn>
              </v-card-actions>
            </v-card>
            <v-card
              :loading="loading"
              class="mx-auto my-12"
              max-width="374"
              style="margin-bottom:20px;"
            >
              <v-img
                height="250"
                src="https://res.cloudinary.com/dvk9bvjrh/image/upload/v1588065422/Instalike-shop-service-comments-instagram-280x280_dndy3y.png"
              ></v-img>

              <v-card-title>Boom Comments</v-card-title>

              <v-card-text>
                <v-row
                  align="center"
                  class="mx-0"
                >
                </v-row>

                <div class="my-4 subtitle-1">
                  500 Comments
                </div>

                <div>Comments Mix Worldwide</div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-title>Limit Hanya Per Akun 1 Hari 1 Kali</v-card-title>

              <v-card-actions>
                <v-btn
                  color="deep-purple lighten-2"
                  text
                  @click="soldOut"
                >
                  Sold Out
                </v-btn>
              </v-card-actions>
            </v-card>
 

          </div>
        </div>
      </div>
      
      
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/insta.jpg")
    }
  },
  data() {
    return {
      name: null,
      email: null,
      message: null,
      loading: false,
      selection: 1,
    };
  },
  mounted(){
    axios.get('http://localhost:1000/key')
    .then(result => console.log(result))
  },
  methods : {
    pilih () {
        this.$swal({
          icon : 'success',
          title : 'Success Memilih',
          text : 'Untuk Memilih Produk Anda Cukup Login IG Anda'
        })
        .then(isConfirm => {
          if(isConfirm.value){
            this.$swal({
                  icon : 'success',
                  title : 'Anda !',
                  text : 'Akan Diarahkan Ke Halaman Login IG',
            })
            .then(result => {
            if(result.value == true){
              
              this.$router.push('/login/instagram')
            }
        })

          }
        })
        
        
      
    },
    soldOut(){
      this.$swal({
        icon : 'warning',
        title : 'Maaf!',
        text : 'Produk Sudah Sold Out Silahkan Tunggu Besok'
      })
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
</style>
