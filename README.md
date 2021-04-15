# video-digit-classifier

## What is it ?

**video-digit-classifier** classifies digits recognized from a hand pose using camera capture.

To do so it used the *HandPose* model that allows for palm detection and hand-skeleton finger tracking.

In top of that, **video-digit-classifier** uses its own Neural Network model to classify the *HandPose* keypoints to a digit.

## Examples

<div style="flex-direction=row">
    <img src="https://github.com/Zuldruck/video-digit-classifier/blob/main/img/one.png?raw=true" width=250 />
    <img src="https://github.com/Zuldruck/video-digit-classifier/blob/main/img/two.png?raw=true" width=250 />
    <img src="https://github.com/Zuldruck/video-digit-classifier/blob/main/img/three.png?raw=true" width=250 />
    <img src="https://github.com/Zuldruck/video-digit-classifier/blob/main/img/four.png?raw=true" width=250 />
    <img src="https://github.com/Zuldruck/video-digit-classifier/blob/main/img/five.png?raw=true" width=250 />
</div>

## How to run it ?

    yarn start
