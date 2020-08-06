[![Netlify Status](https://api.netlify.com/api/v1/badges/21a71b04-a0b4-49dc-bc34-fa439a3cc001/deploy-status)](https://app.netlify.com/sites/admiring-fermi-c16276/deploys)

# :milky_way: :rocket: SpaceX Launches!

## Description
This application displays data about SpaceX rocket launches.

Using the SpaceX API: https://api.spacexdata.com/v3/launches.

**PS - XT Coding Assignment
Problem statement**: *Develop a front-end application which would help users list and browse all launches by SpaceX program.*

**Demo**
[demo](https://admiring-fermi-c16276.netlify.app)


Built with:

- [React](https://reactjs.org/)
- [React-Router-Dom](https://www.npmjs.com/package/react-router-dom)
- [Material-Ui](https://material-ui.com/)
- [react-cool-img](https://www.npmjs.com/package/react-cool-img)

Hosted on:
- [Netlify](https://www.netlify.com/)


> Desktop Version

![Desktopdemo](https://github.com/akhilbharti/spacex-assignment/blob/master/1.png)

> Mobile Version

 ![Mobiledemo](https://github.com/akhilbharti/spacex-assignment/blob/master/2.png)

> LightHouse Score(Desktop)

 ![DesktopLightHouse](https://github.com/akhilbharti/spacex-assignment/blob/master/3.png)

>LightHouse Score(Mobile)

![MobileLightHouse]()

### Features of application
* Application Fetches spacex 100 missions details when app is initialized
* Fiters are provided in the application
* Single filter and combined filter
* Filter colour change on selection
* Material Ui is used for UI framwork to give application a better look.
* Responsive UI for all kind of device
* Skeleton Component also added to improve user experience

### Development Approach
* Used Functional Components with Hooks
* Sending API calls ony when state changes
* Used React lazy and Suspense for code spliting on component level with dynamic imports
### Performance optimization
* lazy loading of Images implemented for each flight detail added
* Memoiztion of Components added, 
* Avoided unncessary API call for the same filter again again.


## Getting Started

1. Clone the Repo

   ```bash
   git clone https://github.com/akhilbharti/spacex-assignment.git 
     ```

2. Install dependencies

   ```bash
   yarn
   ```

3. Fire up the server and watch files

   ```bash
   yarn start
   ```

