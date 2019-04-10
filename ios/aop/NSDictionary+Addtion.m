//
//  NSDictionary+Addtion.m
//  Demo
//
//  Created by jolly on 2019/4/9.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "NSDictionary+Addtion.h"
#import "NSObject+Addtion.h"
#import <objc/runtime.h>

@implementation NSDictionary (Addtion)


+ (void)load
{
  static dispatch_once_t onceToken;
  dispatch_once(&onceToken, ^{
    Class class = [NSClassFromString(@"__NSPlaceholderDictionary") class];
    SEL org_Selector = @selector(initWithObjects:forKeys:count:);
    SEL dt_Selector  = @selector(dt_initWithObjects:forKeys:count:);
    
    Method org_method = class_getInstanceMethod(class, org_Selector);
    Method dt_method  = class_getInstanceMethod(class, dt_Selector);
    
    BOOL isAdd = class_addMethod(class, org_Selector, method_getImplementation(dt_method), method_getTypeEncoding(dt_method));
    if (isAdd) {
      class_replaceMethod(class, dt_Selector, method_getImplementation(org_method), method_getTypeEncoding(org_method));
    }else{
      method_exchangeImplementations(org_method, dt_method);
    }
    
  });
}

- (instancetype)dt_initWithObjects:(const id [])objects forKeys:(const id<NSCopying> [])keys count:(NSUInteger)cnt {
  id newObjects[cnt];
  id newKeys[cnt];
  NSUInteger j = 0;
  for (NSUInteger i = 0; i < cnt; i++) {
    id key = keys[i];
    id obj = objects[i];
    if (!obj) {
      obj = [NSNull null];
    }
    if (!key) {
      key = [NSNull null];
    }
    
    newKeys[j] = key;
    newObjects[j] = obj;
    j++;
  }
  return [self dt_initWithObjects:newObjects forKeys:newKeys count:j];
}

@end
