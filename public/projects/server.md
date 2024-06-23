---
title: Server Stuff
thumbnail: serverroom.jpg
---
I have always been interested in hosting my own stuff, whether a game server or web server, I started out hosting simple things like a Minecraft Server on a Raspberry Pi. While this was fun the Pi could only run one server without noticeable lag or performance impact. At this time I was thinking about upgrading my PC which I built in the summer of 2020 I was thinking I could use the some of the old parts and some cheap used stuff to build a second computer to use as a server. However before I had a chance to do so, one of my friend's dad who worked with servers, and he was able to give me an old IBM System X. I then built a mount out of wood to mount the server on a wall in the utility room in my house. I installed ProxMox which is a OS based on linux targeted at servers it allowed me to easily configure multiple different VMs for different servers. Unfortunately it died in mid 2023, so I started looking on Ebay for a replacement. I was able to get a Dell PowerEdge R710 that came with duel Xeon X5670 @ 2.93 GHz, 128GB of DDR3 ram, and 6TB of HDD storage. I modified my mount as this server was about twice as thick as the System X. ![Dell PowerEdge](/projects/images/server/dell.jpg)*Poweredge mounted to the wall*
With this new server, I had a lot more resources to use, most notably the upgrade from 32GB of mismatched DDR2 to 128GB of DDR3. With more resources I could host a lot more services. The services that I am currently running are:
<br />
- **Minecraft Server**: I have a minecraft server that my friends and I play on every once and a while, sometimes we play with mods but usually its a vanilla server with a couple server side performance mods.

- **Terraria Server**: Another game server, doesn't take up many resources and is fun to play.

- **Home Assistant**: I have a lot of smart devices in my house, so I setup a home assistant instance to control them. It is pretty cool to see them linked up and respond to certain events.

- **Development Server**: The idea behind this is to have a sever that I can ssh into (or use vscode remote server) from anywhere to access my projects. However I broke the vscode sever that is needed for vscode remote to work, and I think it might be an issue with upstream nixpkgs vscode remote server, but I also haven't put enough time into it to really figure out.

- **Wireguard**: I have all of these services that I want to be able to access from anywhere, but I don't want to forward a bunch of ports to the public. So I setup a Wireguard server, Wireguard is a "fast, modern, secure VPN tunnel" I use it to tunnel into my house from my laptop or phone when I am not there, it is very nice way to access everything and I only have to forward 1 port.

- **Jellyfin**: Jellyfin is a media server that I will setup with my NAS (more info down) once that it working and setup. So far I have only setup the VM and done some basic user configuration.

- **Nginx**: Nginx is a reverse proxy that I currently just use for this website, but if I ever make anything else public, it will probably go though this.

All of these are running on the Poweredge as individual VMs. I do also have a couple services that don't need a full VM those are:
<br />
- **Dashy**: Dashy is a simple webserver where I can save all the IPs of the different servers and what they are into different catagories. It is nice so I can quicky get to everything (Sure I could use bookmarks but this is more fun).

- **Webserver**: The actual webserver is just a simple container running the compiled and optimized code for this website (just `npm run build` & `npm start`)

- **Pi-Hole**: Pi-Hole is a network wide ad blocker, it is intended to run on a Raspberry Pi (I used run this at one point when I just had a Ras Pi). It is just a DNS server that doesn't resolve domains that host ads. Works pretty well for most ads aside from things like YouTube where ads are served from the same domain as the content.

- **DDNS-update**: I don't have a static ip address, and I don't want to manually change the IP my domain points to every time it changes. So I setup a script to check if my IP has changed every 5 minutes, and update the IP my domain points to if it has.

- **Grafana**: I still have to fully set this up, but Grafana is a way to monitor the performance of all of my machines.

There are also 2 other computers in the same room as the Poweredge:
- **NAS server**: The parts of my old pc I ended up repurposing as a TrueNAS NAS server. With a RAID5 and 4TB of storage. Unfortunately 1 of my 2TB Seagate drives died super early before I set anything up. I am in the process of getting a replacement from Seagate.

- **Raspberry Pi**: I also have a Raspberry Pi (Different one than the first one) that I was originally going to use with free screen I got be able to view the server performance with grafana and to be able to debug stuff in the room without my laptop. Sadly due to an issue with either the screen or pi (I think pi) if I use a desktop environment it starts artifacting like crazy. So the PI currently doesn't do anything and the screen is just displaying the output of `top` on the server. This is on my list of things to fix.

![Image of screen](/projects/images/server/screen.jpg)*The backside of the screen I have, I had to by a control board off of ebay to use it and its a bit janky*