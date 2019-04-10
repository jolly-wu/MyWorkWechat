//
//  NSObject+Addtion.h
//  Demo
//
//  Created by jolly on 2019/4/9.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface NSObject (Addtion)

+ (void)swizzleInstanceMethodWithClass:(Class)clazz originalSel:(SEL)original replacementSel:(SEL)replacement;

@end

NS_ASSUME_NONNULL_END
