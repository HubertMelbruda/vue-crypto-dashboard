<template>
  <div className="column col-66 grow">
    <div className="card">
      <div className="card-header">
        <p>Edit Profile</p>
      </div>
      <div className="card-body">
        <form onSubmit="{handleSubmit}" className="grow">
          <div className="row">
            <div className="column grow">
              <label>User Name</label>
              <input
                type="text"
                name="userName"
                required
                placeholder="Luck Skywalker"
                v-model="userName"
              />
            </div>
            <div className="column grow">
              <label>Email Address</label>
              <input
                type="text"
                name="emailAddress"
                required
                placeholder="e.g. skywalker@gmail.com"
                v-model="emailAddress"
              />
            </div>
          </div>
          <div className="row">
            <div className="column grow">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                required
                placeholder="Jon"
                v-model="firstName"
              />
            </div>
            <div className="column grow">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                required
                placeholder="Doe"
                v-model="lastName"
              />
            </div>
          </div>

          <div className="row">
            <div className="column grow">
              <label>Address</label>
              <input
                type="text"
                name="address"
                required
                placeholder="Address..."
                v-model="address"
              />
            </div>
          </div>

          <div className="row">
            <div className="column grow">
              <label>Password</label>
              <input
                type="text"
                name="password"
                required
                placeholder="******"
                v-model="password"
              />
            </div>
            <div className="column grow">
              <label>Password Rep.</label>
              <input
                type="text"
                name="passwordRep"
                required
                placeholder="******"
                v-model="passwordRep"
              />
            </div>
          </div>
          <div className="row">
            <div className="column grow">
              <label>About Me</label>
              <textarea
                name="aboutMe"
                cols="30"
                rows="10"
                placeholder="Write something about yourself..."
                v-model="aboutMe"
              ></textarea>
            </div>
          </div>
          <div className="row">
            <button className="accept-btn">Accept</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      emailAddress: "",
      firstName: "",
      lastName: "",
      address: "",
      password: "",
      passwordRep: "",
      aboutMe: "",
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()

      // send data to data base 
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/index.scss";

.card-body {
  label {
    display: inline-block;
    font-size: $font-l;
    font-weight: 400;
    color: $font-color-light;
    padding-bottom: 5px;
    text-align: start;
  }

  input {
    padding: 5px 10px;
  }

  ::placeholder {
    color: rgb(161, 161, 161);
  }

  textarea {
    padding: 5px 10px;
  }

  button {
    @include button;
  }
}
</style>
