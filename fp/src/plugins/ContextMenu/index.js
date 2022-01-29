export default {
  install(Vue) {
    if (this.installed) {
      return;
    }

    this.installed = true;

    Vue.prototype.$modal = {
      EventBus: new Vue(),

      show(name, settings) {
        this.EventBus.$emit("show", { name, settings });
      },
      hide() {
        this.EventBus.$emit("hide");
      },
      delete(id, allCosts) {
        this.EventBus.$emit("delete", { id, allCosts });
        allCosts.splice(id, 1);
        return allCosts;
      },
      edit(data, allCosts) {
        this.EventBus.$emit("edit", { data, allCosts });
        allCosts[data.id].date = data.date;
        allCosts[data.id].category = data.category;
        allCosts[data.id].value = data.value;

        return allCosts;
      },
    };
  },
};
