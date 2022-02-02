<template>
  <div class="hello">
    <div v-for="message in messages" :key="message.name">
      <p>name: {{ message.name }}</p>
      <p>origin: {{ message.origin }}</p>
      <p>destination: {{ message.destination }}</p>
      <hr />
    </div>
  </div>
</template>

<script>
import { io } from "socket.io-client";
export default {
  name: "HelloWorld",
  data: () => {
    return {
      socket: io("http://localhost:3001"),
      messages: [],
    };
  },
  created() {
    this.socket.on("encryptedMessage", (data) => {
      this.messages.push(data);
    });
  },
};
</script>
