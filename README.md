# Real time chat with React & GunDB

[GunDB](https://github.com/amark/gun) is a new real time, distributed, and offline-first database written in JavaScript. I decided to build a quick test app using React to learn a bit more about how this new distributed, real time database thing works. I've used firebase in the past and loved it, so this quote is what sold me on it:

"It's like an open source firebase." -Mark Nadal

Install dependencies with:
```
npm install
```

Then, spin up a local node server:
```
npm start
```

Hit this url in a browser:
```
http://localhost:8080
```

To check out GunDB's real time capabilities, open the above url in two different browsers and enter something into the two chat boxes. As you make changes in one browser, you'll immediately see the update in your other browser.

To see how GunDB's offline-first and distributed database works, kill the local node server and delete the `data.json` file. At this point, the two browsers you have open will be offline. Now, without refreshing either of the pages, type some more stuff into the chat boxes. Then, boot up the server again and watch it all sync back up.

You could even run two different servers, tell GunDB to distribute to both of them, and then kill each server independently. As you bring each of those downed servers back online, you'll see that all of your data is synced back up and none of your data was destroyed or lost.