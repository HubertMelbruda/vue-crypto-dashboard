<template>
  <div className="page-container">
      <div className="row">
        <UserForm />
        <UserCard />
      </div>
    </div>
</template>
<script>
import UserForm from '../components/UserProfile/UserForm.vue'
import UserCard from '../components/UserProfile/UserCard.vue'

export default {
  components: {
    UserForm,
    UserCard,
  }
}
</script>
<style lang="">
  
</style>