# React Native Data Visualizations

This project is a work-in-progress.  The purpose is to build out a library of sample data visualizations to test a composable set of reusable UI components.  This project was started in December of 2019 and is intended to be ongoing. Some goals for this project include incorporating user input handled by a redux store, fetching real data from an external API, and ongoing learning about design and user experience.  

## Weather Graphic

This screen was built as a playground for testing and improving a system of bar chartting components; the weather data is fabricated, and for display purposes only.  Starting with a basic bar made with a react-native <View /> component that can intelligently size itself to fit the data it's meant to represent and the physical space available to it, two different (and reusable) charts were built. Tapping one of the bars on the first chart will trigger an animated tranistion to a simpler chart showing data for the specifc day chosen.  

![](weatherGraphic.gif)