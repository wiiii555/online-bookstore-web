// store.js
import { reactive } from 'vue'

export const userStore = reactive({
  ifLogin: false,
  userId: 0,
  userRole: 0,
  login(userId, userRole) {
    this.ifLogin = true;
    this.userId = userId;
    this.userRole = userRole;
  },
  logout() {
    this.userId = 0;
    this.userRole = 0;
    this.ifLogin = false;
  }
})
