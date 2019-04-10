package com.demo.UI;

import android.annotation.SuppressLint;
import android.content.Context;
import android.widget.Button;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.events.RCTEventEmitter;

@SuppressLint("AppCompatCustomView")
public class MyButton extends Button {

    public MyButton(Context ctx){
        super(ctx);
    }

    public void onButtonPress(ThemedReactContext context) {
        WritableMap map = Arguments.createMap();
        map.putString("data", "110110");
        context.getJSModule(RCTEventEmitter.class).receiveEvent(
                getId(),
                "click",
                map
        );
    }
}
