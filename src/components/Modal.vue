<template>
<div
    class="modal fade"
    tabindex="-1"
    role="dialog"
    id="edit-form"
    aria-labelledby="modelTitleId"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content bg-white border-0">
        <div class="modal-header">
          <h5 class="modal-title">
            <slot name="header">
              <!--  -->
              <!--  -->
            </slot>
          </h5>
          <button
            type="button"
            class="btn-close btn btn-light bg-light"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <slot name="body">
            <!--  -->
            <!--  -->
          </slot>
        </div>
      </div>
    </div>
  </div>

  
</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState'
export default {
    setup(){
        return {
           
        }
    }
}
</script>


<style lang="scss" scoped>


</style>