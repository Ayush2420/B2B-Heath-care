self.addEventListener("install", (event) => {
    console.log("Service Worker Installed");
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    console.log("Service Worker Activated");
});

self.addEventListener("push", function (event) {
    const data = event.data ? event.data.json() : {};

    const title = data.title || "New Notification";
    const options = {
        body: data.body || "You have a new update",
        icon: "/vite.svg",
    };

    event.waitUntil(self.registration.showNotification(title, options));
});