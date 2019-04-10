/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import <UIKit/UIKit.h>

#import "AppDelegate.h"

int main(int argc, char * argv[]) {
  @autoreleasepool {
    int ret = 0;
    @try {
      ret = UIApplicationMain(argc, argv, nil, NSStringFromClass([AppDelegate class]));

    } @catch (NSException *exception) {
      
    } @finally {
      return 0;
    }
  }
}
