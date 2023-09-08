<template>
  <div class="badge-express-wrapper">
    <a href="#">
      <div class="badge-express">
        <div class="feature"><div class="text op0">Где это?</div></div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "badge-express-wrapper",
};
</script>

<style scoped>
.badge-express-wrapper {
  height: 104px;
  background-image: url(../assets/menu-button.png);
  background-size: cover;
  background-position: 50% 50%;
  width: 310px;
  position: relative;
  border-radius: 12px;
}

.badge-express {
  width: 93px;
  top: 8px;
  left: 210px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.op0 {
  opacity: 0;
  border: none;
}

.feature {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px 12px;
  position: relative;
  align-self: stretch;
  width: 100%;
  flex: 0 0 auto;
  border-radius: 12px;
  /* border: 1px solid; */
  border-color: #b4b8cc5c;
}
</style>