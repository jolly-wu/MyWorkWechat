//
//  NSArray+Addtion.m
//  Demo
//
//  Created by jolly on 2019/4/9.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "NSArray+Addtion.h"
#import "NSObject+Addtion.h"

@implementation NSArray (Addtion)

+(void)load
{
  [NSObject swizzleInstanceMethodWithClass:[NSArray class] originalSel:@selector(initWithObjects:) replacementSel:@selector(nk_initWithObjects:)];
}

- (instancetype)nk_initWithObjects:(id)firstObj, ...
{
  if (firstObj ==nil) {
    
  }
    return [self nk_initWithObjects:firstObj];
}

@end
