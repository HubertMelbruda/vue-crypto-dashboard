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
              <label htmlFor="userName">User Name</label>
              <input
                type="text"
                name="userName"
                id="userName"
                required
                placeholder="Luck Skywalker"
                onChange="{updateField}"
              />
            </div>
            <div className="column grow">
              <label htmlFor="emailAddress">Email Address</label>
              <input
                type="text"
                name="emailAddress"
                id="emailAddress"
                required
                placeholder="e.g. skywalker@gmail.com"
                onChange="{updateField}"
              />
            </div>
          </div>
          <div className="row">
            <div className="column grow">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                required
                placeholder="Jon"
                onChange="{updateField}"
              />
            </div>
            <div className="column grow">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastname"
                required
                placeholder="Doe"
                onChange="{updateField}"
              />
            </div>
          </div>

          <div className="row">
            <div className="column grow">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                required
                placeholder="Address..."
                onChange="{updateField}"
              />
            </div>
          </div>

          <div className="row">
            <div className="column grow">
              <label htmlFor="city">Password</label>
              <input
                type="text"
                name="password"
                id="city"
                required
                placeholder="******"
                onChange="{updateField}"
              />
            </div>
            <div className="column grow">
              <label htmlFor="country">Password Rep.</label>
              <input
                type="text"
                name="passwordRep"
                id="country"
                required
                placeholder="******"
                onChange="{updateField}"
              />
            </div>
          </div>
          <div className="row">
            <div className="column grow">
              <label htmlFor="aboutMe">About Me</label>
              <textarea
                name="aboutMe"
                id="aboutMe"
                cols="30"
                rows="10"
                placeholder="Write something about yourself..."
                onChange="{updateField}"
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
export default {}
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
    text-align:  start;
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
