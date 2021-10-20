<template>
  <div class="form mb-5 p-5 bg-light">
    <h1>
      <slot name="title"/>
    </h1>

    <div class="row justify-content-md-center">
      <div class="col col-lg-6">
        <slot name="formGroup"/>
      </div>
    </div>
  </div>
</template>

