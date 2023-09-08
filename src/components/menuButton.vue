<template>
  <div class="menu-button">
    <img class="vector point" src="../assets/vector.svg" />
    <div class="xmark"><img class="edit" src="../assets/edit-1.svg" /></div>
  </div>
</template>

<script>
export default {
  name: "menu-button",
  data: function () {
    return {};
  },
};
</script>

<style scoped>
.menu-button {
  display: flex;
  height: 37px;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0px 9px 12px;
  background-color: #ffffff;
  width: 310px;
  position: relative;
  border-radius: 12px;
}

img {
  cursor: pointer;
}

.xmark {
  cursor: pointer;
}
</style>
