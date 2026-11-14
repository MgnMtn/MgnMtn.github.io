---
layout: page
title: Pi-ggy Bank
description: A money box that counts your coins with computer vision. 1st place, Best Hack at hackSheffield 5.
img:
importance: 3
category: hackathon
github: MgnMtn/Pi-ggy_Bank
language: Python
topics: [computer-vision, opencv, raspberry-pi, hackathon]
links:
  - name: Devpost
    url: https://devpost.com/software/pi-ggy_bank
---

Pi-ggy Bank is a money box that uses computer vision to work out which coins are dropped into it, so you can keep
track of how much you have saved. We built Pi-ggy Bank at
[hackSheffield 5](https://devpost.com/software/pi-ggy_bank), where it won **Best
Hack (1st place)**. It was our first hardware hack.

## How it works

1. **Find the coins:** OpenCV segments each image to locate the coins.
2. **Describe them:** each coin is cut out of the image and its histogram features are computed.
3. **Train:** a few hundred training images, extracted with the first stage, are used to train a Support Vector
   Machine (SVM) classifier with scikit-learn.
4. **Predict:** when a coin is dropped, a series of images is captured, the
   classifier predicts the coin in each one, and the most common prediction
   wins.

Lighting was the main challenge: training and test images were taken at different times of day, so the lighting
conditions are normalised before classification.

## My contribution

I collected the training data, built the physical prototype, and used OpenCV to
compute the histogram features of the coins.

[Devpost write-up](https://devpost.com/software/pi-ggy_bank) · [GitHub repository](https://github.com/MgnMtn/Pi-ggy_Bank)
