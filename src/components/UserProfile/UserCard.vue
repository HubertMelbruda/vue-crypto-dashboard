<template>
  <div className="column col-33 grow">
    <div className="card">
      <div className="card-img">
        <img :src="require('../../assets/img/user-background-01.jpg')" alt="background" />
        <div className="avatar">
          <img :src="require('../../assets/img/default-avatar.png')" alt="userAvatar" />
        </div>
      </div>

      <div className="card-body">
        <div className="user-data">
          <h2>Nick</h2>
          <h5>Name Surname</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            quia exercitationem eius nam repellat voluptatibus laudantium
            accusantium ex!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/index.scss";

.card-img {
  position: relative;

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
}

.avatar {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -0%);

  img {
    width: 150px;
    height: 150px;
    border: 2px solid $color-05;
    border-radius: 40px;
  }
}

.user-data {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin-top: 90px;
  max-width: 350px;

  p {
    text-align: center;
    padding: 10px;
    font-size: $font-m;
  }
}
</style>
