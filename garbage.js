function spawnGarbage() {
    var no = getRandomNo(5, 9);
    var imageNo = getRandomNo(1, 4);
    // no = 1;
    // imageNo = 2;
    if (frameCount % 30 === 0 && garbageGroup.length < totalDrop) {
        swoosh.setVolume(2);
        swoosh.play();
        var garbage = createSprite(100, 100, 10, 10);
        garbage.x = Math.round(random(width / 2 - 150, width / 2 + 150));
        garbage.velocityY = 7;
        garbage.scale = 0.15;
        garbage.depth = dustbin.depth - 1;
        garbage.lifetime = 88;
        console.log(garbage);
        var type = setType(no);
        if (no === 5) {
            garbage.shapeColor = (rgb(50, 0, 0));
            // dustbin.changeImage("plastic");
            if (imageNo === 1) {
                garbage.addAnimation("bottleImg", bottleImg);
            } else if (imageNo === 2) {
                garbage.addAnimation("bagImg", bagImg);
            } else if (imageNo === 3) {
                garbage.addAnimation("bag2Img", bag2Img);
                garbage.scale = 0.25;
            } else if (imageNo === 4) {
                garbage.addAnimation("bottle2Img", bottle2Img);
                garbage.scale = 0.2;
            }
        } if (no === 6) {
            garbage.shapeColor = (rgb(0, 0, 255));
            // dustbin.changeImage("glass");
            // garbage.addAnimation("jarImg", jarImg);
            if (imageNo = 1) {
                garbage.addAnimation("jarImg", jarImg);
            } else if (imageNo = 2) {
                garbage.addAnimation("glassBottle", glassBottle);
            } else if (imageNo = 3) {
                garbage.addAnimation("jar2Img", jar2Img);
                garbage.scale = 0.25;
            } else if (imageNo = 4) {
                garbage.addAnimation("glassImg", glassImg);
                garbage.scale = 0.25;
            } else if (imageNo = 5) {
                garbage.addAnimation("bulbImg", bulb);
                garbage.scale = 0.15;
            }
        }
        else if (no === 7) {
            // dustbin.changeImage("metal");
            // garbage.shapeColor = (rgb(0, 0, 255));
            // garbage.addAnimation("canImg", canImg);
            if (imageNo === 1) {
                garbage.addAnimation("canImg", canImg);
            } else if (imageNo === 2) {
                garbage.addAnimation("can2Img", can2Img);
                garbage.scale = 0.1;
            } else if (imageNo === 3) {
                garbage.addAnimation("can3Img", can3Img);
                garbage.scale = 0.1;
            } else if (imageNo === 4) {
                garbage.addAnimation("spoon", spoon);
                garbage.scale = 0.15;
            } else if (imageNo === 5) {
                garbage.addAnimation("fork", fork);
                garbage.scale = 0.15;
            }
        }
        else if (no === 8) {
            // dustbin.changeImage("paper");
            if (imageNo <= 2) {
                garbage.addAnimation("cupImg", cupImg);
            } else if (imageNo >= 3) {
                garbage.addAnimation("cup2Img", cup2Img);
                garbage.scale = 0.1;
            }

            // garbage.addAnimation("cupImg", cupImg);
        }
        else if (no === 9) {
            // dustbin.changeImage("organic");
            //   console.log(type);
            if (imageNo <= 2) {
                garbage.addAnimation("bananaImg", bananaImg);
                garbage.scale = 0.05;

            } else if (imageNo = 3) {
                garbage.addAnimation("appleImg", appleImg);
                garbage.scale = 0.08;
            } else if (imageNo > 3) {
                garbage.addAnimation("fishImg", fish);
                garbage.scale = 0.5;

            }
        }

        garbage.rotationSpeed = Math.round(random(-15, 15));
        typeList.push(type);
        garbageGroup.push(garbage);
        //  garbageGroup.setLifetimeEach(32);

        // camera.position.y = 700;
    }
    // garbageGroup.bounceOff(dustbin);
}

function createToxic() {
    var no = Math.round(random(1, 2));
    if (frameCount % 180 === 0) {
        var toxic = createSprite(100, 100);
        toxic.x = Math.round(random(width / 2 - 150, width + 150));
        toxic.addImage("toxic", toxicImg);
        toxic.addImage("battery", battery);
        if (no === 1) {
            toxic.changeAnimation("toxic");
        } else if (no === 2) {
            toxic.changeAnimation("battery");


        }
        toxic.scale = 0.05;
        toxic.lifetime = 80;
        toxic.depth = dustbin.depth - 1;
        toxic.velocityY = 7;
        toxic.rotationSpeed = Math.round(random(-15, 15));
        toxicGroup.push(toxic);
        gcircle = createSprite(toxic.x, toxic.y);
        gcircle.velocityY = toxic.velocityY;
        gcircle.lifetime = 80;
        gcircle.scale = 0.3;
        gcircle.addAnimation("1", gcircleImg);
        gcircle.rotationSpeed = 2;
        gcircle.depth = toxic.depth - 1;
        gcircle.setCollider("circle", 0, 0, 80)
        // gcircle.debug = true;
        gcircleGroup.push(gcircle);

        tutu.play();
    }
    for (var i = 0; i <= toxicGroup.length; i++) {

        var temp = toxicGroup.get(i);
        var temp2 = gcircleGroup.get(i);
        if (temp !== undefined) {
            if (temp.isTouching(dustbin)) {
                //dustbin.destroy();
                temp.destroy();
                tutu.stop();
                // alert("woho");
                if (!temp.isTouching(dustbin)) {
                    o_ou.play();
                    dustbin.changeAnimation("toxic");
                    score = score - 1;
                }
            }
        }
        if (temp2 !== undefined) {
            if (temp2.isTouching(dustbin)) {
                //dustbin.destroy();
                temp2.destroy();
                // alert("woho");
            }
        }
    }
}
