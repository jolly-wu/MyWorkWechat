//
//  NSObject+Addtion.m
//  Demo
//
//  Created by jolly on 2019/4/9.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "NSObject+Addtion.h"
#import <objc/runtime.h>

@implementation NSObject (Addtion)

+ (void)swizzleInstanceMethodWithClass:(Class)clazz originalSel:(SEL)original replacementSel:(SEL)replacement
{
  Method originalMethod = class_getInstanceMethod(clazz, original);// Note that this function searches superclasses for implementations, whereas class_copyMethodList does not!!如果子类没有实现该方法则返回的是父类的方法
  Method replacementMethod = class_getInstanceMethod(clazz, replacement);
  if (class_addMethod(clazz, original, method_getImplementation(replacementMethod), method_getTypeEncoding(replacementMethod))) {
    class_replaceMethod(clazz, replacement, method_getImplementation(originalMethod), method_getTypeEncoding(originalMethod));
  } else {
    method_exchangeImplementations(originalMethod, replacementMethod);
  }
}

@end
