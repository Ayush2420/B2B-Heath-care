export const requestNotificationPermission = async () => {
    if (!("Notification" in window)) {
        console.log("Browser does not support notifications");
        return;
    }

    const permission = await Notification.requestPermission();
    return permission;
};

export const showNotification = async (title, body) => {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") return;

    const registration = await navigator.serviceWorker.ready;

     await registration.showNotification(title, {
         body,
         icon: "/vite.svg",
     });
};