import { Modal } from 'bootstrap';

export default {
  methods: {
    showModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
    pushAndHide(url) {
      this.$router.push(url);
      this.hideModal();
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
    this.modal.hide();
  },
};
