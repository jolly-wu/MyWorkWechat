package com.demo.UI;

import android.view.View;
import android.widget.Button;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewManager;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import javax.annotation.Nullable;


public class CrazyButtonManager extends SimpleViewManager<MyButton> {
    public static final String REACT_CLASS = "CrazyButton";
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @ReactProp(name = "title")
    public void setTitle(Button btn,String text) {
        btn.setText(text);
    }


    @Override
    protected MyButton createViewInstance(final ThemedReactContext reactContext) {
        final MyButton btn = new MyButton(reactContext);
        return btn;
    }

    public List<ViewManager> createViewManagers(
            ReactApplicationContext reactContext) {
        return Arrays.<ViewManager>asList(
                new CrazyButtonManager()
        );
    }

    public Map getExportedCustomBubblingEventTypeConstants() {
        return MapBuilder.builder()
                .put(
                        "click",
                        MapBuilder.of(
                                "phasedRegistrationNames",
                                MapBuilder.of("bubbled", "onClick")))
                .build();
    }

    @Override
    protected void addEventEmitters(final ThemedReactContext reactContext, final MyButton view) {
        super.addEventEmitters(reactContext, view);
        view.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                view.onButtonPress(reactContext);
            }
        });
    }
}
