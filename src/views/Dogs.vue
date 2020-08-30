<template>
  <div>
    <PetTable species="Dog" :pets="dogs" />
  </div>
</template>


<script>
import { mapState } from "vuex";
import PetTable from "../components/PetTable.vue";

export default {
  components: {
    PetTable,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["dogs"]),
  },
};
</script>