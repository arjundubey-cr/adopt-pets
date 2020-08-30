<template>
  <div>
    <PetTable species="cat" :pets="cats" />
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
    ...mapState(["cats"]),
  },
};
</script>