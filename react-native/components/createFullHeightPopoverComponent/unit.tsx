import * as React from "react";
import { Dimensions, Text, View } from "react-native";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import * as TestRenderer from "react-test-renderer";
import {
  ControlStyle,
  createFullHeightPopoverComponent,
  SimpleModal,
  SizedHorizontallySymmetricalSafeAreaView,
  ContainerFillingKeyboardAvoidingView,
  unwrapRenderedFunctionComponent,
} from "../../..";

test(`renders as expected when not disabled`, () => {
  Dimensions.set({
    window: {
      width: 640,
      height: 480,
      scale: 2.42,
      fontScale: 3.51,
    },
  });

  const controlStyle: ControlStyle = {
    fontFamily: `Example Font Family`,
    fontSize: 37,
    paddingVertical: 12,
    paddingHorizontal: 29,
    blurredValid: {
      textColor: `#FFEE00`,
      placeholderColor: `#E7AA32`,
      backgroundColor: `#32AE12`,
      radius: 5,
      border: {
        width: 4,
        color: `#FF00FF`,
      },
    },
    blurredInvalid: {
      textColor: `#99FE88`,
      placeholderColor: `#CACA3A`,
      backgroundColor: `#259284`,
      radius: 10,
      border: {
        width: 6,
        color: `#9A9A8E`,
      },
    },
    focusedValid: {
      textColor: `#55EA13`,
      placeholderColor: `#273346`,
      backgroundColor: `#CABA99`,
      radius: 3,
      border: {
        width: 5,
        color: `#646464`,
      },
    },
    focusedInvalid: {
      textColor: `#ABAADE`,
      placeholderColor: `#47ADAD`,
      backgroundColor: `#32AA88`,
      radius: 47,
      border: {
        width: 12,
        color: `#98ADAA`,
      },
    },
    disabledValid: {
      textColor: `#AE2195`,
      placeholderColor: `#FFAAEE`,
      backgroundColor: `#772728`,
      radius: 100,
      border: {
        width: 14,
        color: `#5E5E5E`,
      },
    },
    disabledInvalid: {
      textColor: `#340297`,
      placeholderColor: `#233832`,
      backgroundColor: `#938837`,
      radius: 2,
      border: {
        width: 19,
        color: `#573829`,
      },
    },
  };

  const Component = createFullHeightPopoverComponent(controlStyle);

  const renderer = TestRenderer.create(
    <SafeAreaInsetsContext.Provider
      value={{ top: 16, bottom: 60, left: 53, right: 24 }}
    >
      <Component
        label="Example Button Content"
        placeholder="Example Placeholder"
        valid
        disabled={false}
        children={() => <Text>Example Pop Over Content</Text>}
      />
    </SafeAreaInsetsContext.Provider>
  );

  expect(renderer.toTree()?.rendered).toEqual(
    expect.objectContaining({
      props: {
        onMeasure: expect.any(Function),
        onPress: expect.any(Function),
        disabled: false,
        label: `Example Button Content`,
        placeholder: `Example Placeholder`,
        valid: true,
      },
    })
  );

  expect(
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).type
  ).toBeAFunctionWithTheStaticProperties({
    pickerButton: { controlStyle },
  });

  renderer.unmount();
});

test(`renders as expected when disabled`, () => {
  Dimensions.set({
    window: {
      width: 640,
      height: 480,
      scale: 2.42,
      fontScale: 3.51,
    },
  });

  const controlStyle: ControlStyle = {
    fontFamily: `Example Font Family`,
    fontSize: 37,
    paddingVertical: 12,
    paddingHorizontal: 29,
    blurredValid: {
      textColor: `#FFEE00`,
      placeholderColor: `#E7AA32`,
      backgroundColor: `#32AE12`,
      radius: 5,
      border: {
        width: 4,
        color: `#FF00FF`,
      },
    },
    blurredInvalid: {
      textColor: `#99FE88`,
      placeholderColor: `#CACA3A`,
      backgroundColor: `#259284`,
      radius: 10,
      border: {
        width: 6,
        color: `#9A9A8E`,
      },
    },
    focusedValid: {
      textColor: `#55EA13`,
      placeholderColor: `#273346`,
      backgroundColor: `#CABA99`,
      radius: 3,
      border: {
        width: 5,
        color: `#646464`,
      },
    },
    focusedInvalid: {
      textColor: `#ABAADE`,
      placeholderColor: `#47ADAD`,
      backgroundColor: `#32AA88`,
      radius: 47,
      border: {
        width: 12,
        color: `#98ADAA`,
      },
    },
    disabledValid: {
      textColor: `#AE2195`,
      placeholderColor: `#FFAAEE`,
      backgroundColor: `#772728`,
      radius: 100,
      border: {
        width: 14,
        color: `#5E5E5E`,
      },
    },
    disabledInvalid: {
      textColor: `#340297`,
      placeholderColor: `#233832`,
      backgroundColor: `#938837`,
      radius: 2,
      border: {
        width: 19,
        color: `#573829`,
      },
    },
  };

  const Component = createFullHeightPopoverComponent(controlStyle);

  const renderer = TestRenderer.create(
    <SafeAreaInsetsContext.Provider
      value={{ top: 16, bottom: 60, left: 53, right: 24 }}
    >
      <Component
        label="Example Button Content"
        placeholder="Example Placeholder"
        valid
        disabled
        children={() => <Text>Example Pop Over Content</Text>}
      />
    </SafeAreaInsetsContext.Provider>
  );

  expect(renderer.toTree()?.rendered).toEqual(
    expect.objectContaining({
      props: {
        onMeasure: expect.any(Function),
        onPress: expect.any(Function),
        disabled: true,
        label: `Example Button Content`,
        placeholder: `Example Placeholder`,
        valid: true,
      },
    })
  );

  expect(
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).type
  ).toBeAFunctionWithTheStaticProperties({
    pickerButton: { controlStyle },
  });

  renderer.unmount();
});

test(`renders as expected when not disabled after layout`, () => {
  Dimensions.set({
    window: {
      width: 640,
      height: 480,
      scale: 2.42,
      fontScale: 3.51,
    },
  });

  const controlStyle: ControlStyle = {
    fontFamily: `Example Font Family`,
    fontSize: 37,
    paddingVertical: 12,
    paddingHorizontal: 29,
    blurredValid: {
      textColor: `#FFEE00`,
      placeholderColor: `#E7AA32`,
      backgroundColor: `#32AE12`,
      radius: 5,
      border: {
        width: 4,
        color: `#FF00FF`,
      },
    },
    blurredInvalid: {
      textColor: `#99FE88`,
      placeholderColor: `#CACA3A`,
      backgroundColor: `#259284`,
      radius: 10,
      border: {
        width: 6,
        color: `#9A9A8E`,
      },
    },
    focusedValid: {
      textColor: `#55EA13`,
      placeholderColor: `#273346`,
      backgroundColor: `#CABA99`,
      radius: 3,
      border: {
        width: 5,
        color: `#646464`,
      },
    },
    focusedInvalid: {
      textColor: `#ABAADE`,
      placeholderColor: `#47ADAD`,
      backgroundColor: `#32AA88`,
      radius: 47,
      border: {
        width: 12,
        color: `#98ADAA`,
      },
    },
    disabledValid: {
      textColor: `#AE2195`,
      placeholderColor: `#FFAAEE`,
      backgroundColor: `#772728`,
      radius: 100,
      border: {
        width: 14,
        color: `#5E5E5E`,
      },
    },
    disabledInvalid: {
      textColor: `#340297`,
      placeholderColor: `#233832`,
      backgroundColor: `#938837`,
      radius: 2,
      border: {
        width: 19,
        color: `#573829`,
      },
    },
  };

  const Component = createFullHeightPopoverComponent(controlStyle);

  const renderer = TestRenderer.create(
    <SafeAreaInsetsContext.Provider
      value={{ top: 16, bottom: 60, left: 53, right: 24 }}
    >
      <Component
        label="Example Button Content"
        placeholder="Example Placeholder"
        valid
        disabled={false}
        children={() => <Text>Example Pop Over Content</Text>}
      />
    </SafeAreaInsetsContext.Provider>
  );

  TestRenderer.act(() => {
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).props[
      `onMeasure`
    ](123, 456, 220, 20, 70, 310);
  });

  expect(renderer.toTree()?.rendered).toEqual(
    expect.objectContaining({
      props: {
        onMeasure: expect.any(Function),
        onPress: expect.any(Function),
        disabled: false,
        label: `Example Button Content`,
        placeholder: `Example Placeholder`,
        valid: true,
      },
    })
  );

  expect(
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).type
  ).toBeAFunctionWithTheStaticProperties({
    pickerButton: { controlStyle },
  });

  renderer.unmount();
});

test(`renders as expected when disabled after layout`, () => {
  Dimensions.set({
    window: {
      width: 640,
      height: 480,
      scale: 2.42,
      fontScale: 3.51,
    },
  });

  const controlStyle: ControlStyle = {
    fontFamily: `Example Font Family`,
    fontSize: 37,
    paddingVertical: 12,
    paddingHorizontal: 29,
    blurredValid: {
      textColor: `#FFEE00`,
      placeholderColor: `#E7AA32`,
      backgroundColor: `#32AE12`,
      radius: 5,
      border: {
        width: 4,
        color: `#FF00FF`,
      },
    },
    blurredInvalid: {
      textColor: `#99FE88`,
      placeholderColor: `#CACA3A`,
      backgroundColor: `#259284`,
      radius: 10,
      border: {
        width: 6,
        color: `#9A9A8E`,
      },
    },
    focusedValid: {
      textColor: `#55EA13`,
      placeholderColor: `#273346`,
      backgroundColor: `#CABA99`,
      radius: 3,
      border: {
        width: 5,
        color: `#646464`,
      },
    },
    focusedInvalid: {
      textColor: `#ABAADE`,
      placeholderColor: `#47ADAD`,
      backgroundColor: `#32AA88`,
      radius: 47,
      border: {
        width: 12,
        color: `#98ADAA`,
      },
    },
    disabledValid: {
      textColor: `#AE2195`,
      placeholderColor: `#FFAAEE`,
      backgroundColor: `#772728`,
      radius: 100,
      border: {
        width: 14,
        color: `#5E5E5E`,
      },
    },
    disabledInvalid: {
      textColor: `#340297`,
      placeholderColor: `#233832`,
      backgroundColor: `#938837`,
      radius: 2,
      border: {
        width: 19,
        color: `#573829`,
      },
    },
  };

  const Component = createFullHeightPopoverComponent(controlStyle);

  const renderer = TestRenderer.create(
    <SafeAreaInsetsContext.Provider
      value={{ top: 16, bottom: 60, left: 53, right: 24 }}
    >
      <Component
        label="Example Button Content"
        placeholder="Example Placeholder"
        valid
        disabled
        children={() => <Text>Example Pop Over Content</Text>}
      />
    </SafeAreaInsetsContext.Provider>
  );

  TestRenderer.act(() => {
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).props[
      `onMeasure`
    ](123, 456, 220, 20, 70, 310);
  });

  expect(renderer.toTree()?.rendered).toEqual(
    expect.objectContaining({
      props: {
        onMeasure: expect.any(Function),
        onPress: expect.any(Function),
        disabled: true,
        label: `Example Button Content`,
        placeholder: `Example Placeholder`,
        valid: true,
      },
    })
  );

  expect(
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).type
  ).toBeAFunctionWithTheStaticProperties({
    pickerButton: { controlStyle },
  });

  renderer.unmount();
});

test(`renders as expected when not disabled after layout after press`, () => {
  Dimensions.set({
    window: {
      width: 640,
      height: 480,
      scale: 2.42,
      fontScale: 3.51,
    },
  });

  const controlStyle: ControlStyle = {
    fontFamily: `Example Font Family`,
    fontSize: 37,
    paddingVertical: 12,
    paddingHorizontal: 29,
    blurredValid: {
      textColor: `#FFEE00`,
      placeholderColor: `#E7AA32`,
      backgroundColor: `#32AE12`,
      radius: 5,
      border: {
        width: 4,
        color: `#FF00FF`,
      },
    },
    blurredInvalid: {
      textColor: `#99FE88`,
      placeholderColor: `#CACA3A`,
      backgroundColor: `#259284`,
      radius: 10,
      border: {
        width: 6,
        color: `#9A9A8E`,
      },
    },
    focusedValid: {
      textColor: `#55EA13`,
      placeholderColor: `#273346`,
      backgroundColor: `#CABA99`,
      radius: 3,
      border: {
        width: 5,
        color: `#646464`,
      },
    },
    focusedInvalid: {
      textColor: `#ABAADE`,
      placeholderColor: `#47ADAD`,
      backgroundColor: `#32AA88`,
      radius: 47,
      border: {
        width: 12,
        color: `#98ADAA`,
      },
    },
    disabledValid: {
      textColor: `#AE2195`,
      placeholderColor: `#FFAAEE`,
      backgroundColor: `#772728`,
      radius: 100,
      border: {
        width: 14,
        color: `#5E5E5E`,
      },
    },
    disabledInvalid: {
      textColor: `#340297`,
      placeholderColor: `#233832`,
      backgroundColor: `#938837`,
      radius: 2,
      border: {
        width: 19,
        color: `#573829`,
      },
    },
  };

  const Component = createFullHeightPopoverComponent(controlStyle);

  const renderer = TestRenderer.create(
    <SafeAreaInsetsContext.Provider
      value={{ top: 16, bottom: 60, left: 53, right: 24 }}
    >
      <Component
        label="Example Button Content"
        placeholder="Example Placeholder"
        valid
        disabled={false}
        children={() => <Text>Example Pop Over Content</Text>}
      />
    </SafeAreaInsetsContext.Provider>
  );

  TestRenderer.act(() => {
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).props[
      `onMeasure`
    ](123, 456, 220, 20, 70, 310);
  });

  TestRenderer.act(() => {
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).props[
      `onPress`
    ]();
  });

  expect(renderer.toTree()?.rendered).toEqual([
    expect.objectContaining({
      props: {
        onMeasure: expect.any(Function),
        onPress: expect.any(Function),
        disabled: false,
        label: `Example Button Content`,
        placeholder: `Example Placeholder`,
        valid: true,
      },
    }),
    expect.objectContaining({
      nodeType: `component`,
      type: SimpleModal,
      props: expect.objectContaining({
        onClose: expect.any(Function),
        children: expect.objectContaining({
          type: SizedHorizontallySymmetricalSafeAreaView,
          props: {
            top: true,
            width: `fillsContainer`,
            height: `fillsContainer`,
            children: expect.objectContaining({
              type: View,
              props: {
                style: [
                  {
                    height: `100%`,
                    backgroundColor: `#CABA99`,
                    borderWidth: 5,
                    borderBottomWidth: 0,
                    borderColor: `#646464`,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                  },
                  {
                    left: 70,
                    width: 220,
                  },
                ],
                children: expect.objectContaining({
                  type: SizedHorizontallySymmetricalSafeAreaView,
                  props: {
                    bottom: true,
                    left: true,
                    right: true,
                    width: `fillsContainer`,
                    height: `fillsContainer`,
                    children: expect.objectContaining({
                      type: ContainerFillingKeyboardAvoidingView,
                      props: {
                        children: expect.objectContaining({
                          type: Text,
                          props: {
                            children: `Example Pop Over Content`,
                          },
                        }),
                      },
                    }),
                  },
                }),
              },
            }),
          },
        }),
      }),
    }),
  ]);

  expect(
    (
      (
        renderer.toTree()
          ?.rendered as ReadonlyArray<TestRenderer.ReactTestRendererTree>
      )[0] as TestRenderer.ReactTestRendererTree
    ).type
  ).toBeAFunctionWithTheStaticProperties({
    pickerButton: { controlStyle },
  });

  renderer.unmount();
});

test(`renders as expected when not disabled after press after layout`, () => {
  Dimensions.set({
    window: {
      width: 640,
      height: 480,
      scale: 2.42,
      fontScale: 3.51,
    },
  });

  const controlStyle: ControlStyle = {
    fontFamily: `Example Font Family`,
    fontSize: 37,
    paddingVertical: 12,
    paddingHorizontal: 29,
    blurredValid: {
      textColor: `#FFEE00`,
      placeholderColor: `#E7AA32`,
      backgroundColor: `#32AE12`,
      radius: 5,
      border: {
        width: 4,
        color: `#FF00FF`,
      },
    },
    blurredInvalid: {
      textColor: `#99FE88`,
      placeholderColor: `#CACA3A`,
      backgroundColor: `#259284`,
      radius: 10,
      border: {
        width: 6,
        color: `#9A9A8E`,
      },
    },
    focusedValid: {
      textColor: `#55EA13`,
      placeholderColor: `#273346`,
      backgroundColor: `#CABA99`,
      radius: 3,
      border: {
        width: 5,
        color: `#646464`,
      },
    },
    focusedInvalid: {
      textColor: `#ABAADE`,
      placeholderColor: `#47ADAD`,
      backgroundColor: `#32AA88`,
      radius: 47,
      border: {
        width: 12,
        color: `#98ADAA`,
      },
    },
    disabledValid: {
      textColor: `#AE2195`,
      placeholderColor: `#FFAAEE`,
      backgroundColor: `#772728`,
      radius: 100,
      border: {
        width: 14,
        color: `#5E5E5E`,
      },
    },
    disabledInvalid: {
      textColor: `#340297`,
      placeholderColor: `#233832`,
      backgroundColor: `#938837`,
      radius: 2,
      border: {
        width: 19,
        color: `#573829`,
      },
    },
  };

  const Component = createFullHeightPopoverComponent(controlStyle);

  const renderer = TestRenderer.create(
    <SafeAreaInsetsContext.Provider
      value={{ top: 16, bottom: 60, left: 53, right: 24 }}
    >
      <Component
        label="Example Button Content"
        placeholder="Example Placeholder"
        valid
        disabled={false}
        children={() => <Text>Example Pop Over Content</Text>}
      />
    </SafeAreaInsetsContext.Provider>
  );

  TestRenderer.act(() => {
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).props[
      `onPress`
    ]();
  });

  TestRenderer.act(() => {
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).props[
      `onMeasure`
    ](123, 456, 220, 20, 70, 310);
  });

  expect(renderer.toTree()?.rendered).toEqual([
    expect.objectContaining({
      props: {
        onMeasure: expect.any(Function),
        onPress: expect.any(Function),
        disabled: false,
        label: `Example Button Content`,
        placeholder: `Example Placeholder`,
        valid: true,
      },
    }),
    expect.objectContaining({
      nodeType: `component`,
      type: SimpleModal,
      props: expect.objectContaining({
        onClose: expect.any(Function),
        children: expect.objectContaining({
          type: SizedHorizontallySymmetricalSafeAreaView,
          props: {
            top: true,
            width: `fillsContainer`,
            height: `fillsContainer`,
            children: expect.objectContaining({
              type: View,
              props: {
                style: [
                  {
                    height: `100%`,
                    backgroundColor: `#CABA99`,
                    borderWidth: 5,
                    borderBottomWidth: 0,
                    borderColor: `#646464`,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                  },
                  {
                    left: 70,
                    width: 220,
                  },
                ],
                children: expect.objectContaining({
                  type: SizedHorizontallySymmetricalSafeAreaView,
                  props: {
                    bottom: true,
                    left: true,
                    right: true,
                    width: `fillsContainer`,
                    height: `fillsContainer`,
                    children: expect.objectContaining({
                      type: ContainerFillingKeyboardAvoidingView,
                      props: {
                        children: expect.objectContaining({
                          type: Text,
                          props: {
                            children: `Example Pop Over Content`,
                          },
                        }),
                      },
                    }),
                  },
                }),
              },
            }),
          },
        }),
      }),
    }),
  ]);

  expect(
    (
      (
        renderer.toTree()
          ?.rendered as ReadonlyArray<TestRenderer.ReactTestRendererTree>
      )[0] as TestRenderer.ReactTestRendererTree
    ).type
  ).toBeAFunctionWithTheStaticProperties({
    pickerButton: { controlStyle },
  });

  renderer.unmount();
});

test(`correctly handles layout changes which only move on the X axis`, () => {
  Dimensions.set({
    window: {
      width: 640,
      height: 480,
      scale: 2.42,
      fontScale: 3.51,
    },
  });

  const controlStyle: ControlStyle = {
    fontFamily: `Example Font Family`,
    fontSize: 37,
    paddingVertical: 12,
    paddingHorizontal: 29,
    blurredValid: {
      textColor: `#FFEE00`,
      placeholderColor: `#E7AA32`,
      backgroundColor: `#32AE12`,
      radius: 5,
      border: {
        width: 4,
        color: `#FF00FF`,
      },
    },
    blurredInvalid: {
      textColor: `#99FE88`,
      placeholderColor: `#CACA3A`,
      backgroundColor: `#259284`,
      radius: 10,
      border: {
        width: 6,
        color: `#9A9A8E`,
      },
    },
    focusedValid: {
      textColor: `#55EA13`,
      placeholderColor: `#273346`,
      backgroundColor: `#CABA99`,
      radius: 3,
      border: {
        width: 5,
        color: `#646464`,
      },
    },
    focusedInvalid: {
      textColor: `#ABAADE`,
      placeholderColor: `#47ADAD`,
      backgroundColor: `#32AA88`,
      radius: 47,
      border: {
        width: 12,
        color: `#98ADAA`,
      },
    },
    disabledValid: {
      textColor: `#AE2195`,
      placeholderColor: `#FFAAEE`,
      backgroundColor: `#772728`,
      radius: 100,
      border: {
        width: 14,
        color: `#5E5E5E`,
      },
    },
    disabledInvalid: {
      textColor: `#340297`,
      placeholderColor: `#233832`,
      backgroundColor: `#938837`,
      radius: 2,
      border: {
        width: 19,
        color: `#573829`,
      },
    },
  };

  const Component = createFullHeightPopoverComponent(controlStyle);

  const renderer = TestRenderer.create(
    <SafeAreaInsetsContext.Provider
      value={{ top: 16, bottom: 60, left: 53, right: 24 }}
    >
      <Component
        label="Example Button Content"
        placeholder="Example Placeholder"
        valid
        disabled={false}
        children={() => <Text>Example Pop Over Content</Text>}
      />
    </SafeAreaInsetsContext.Provider>
  );

  TestRenderer.act(() => {
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).props[
      `onMeasure`
    ](123, 456, 220, 20, 70, 310);
  });

  TestRenderer.act(() => {
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).props[
      `onPress`
    ]();
  });

  TestRenderer.act(() => {
    (
      (
        renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree[]
      )[0] as TestRenderer.ReactTestRendererTree
    ).props[`onMeasure`](123, 456, 220, 20, 10, 310);
  });

  expect(renderer.toTree()?.rendered).toEqual([
    expect.objectContaining({
      props: {
        onMeasure: expect.any(Function),
        onPress: expect.any(Function),
        disabled: false,
        label: `Example Button Content`,
        placeholder: `Example Placeholder`,
        valid: true,
      },
    }),
    expect.objectContaining({
      nodeType: `component`,
      type: SimpleModal,
      props: expect.objectContaining({
        onClose: expect.any(Function),
        children: expect.objectContaining({
          type: SizedHorizontallySymmetricalSafeAreaView,
          props: {
            top: true,
            width: `fillsContainer`,
            height: `fillsContainer`,
            children: expect.objectContaining({
              type: View,
              props: {
                style: [
                  {
                    height: `100%`,
                    backgroundColor: `#CABA99`,
                    borderWidth: 5,
                    borderBottomWidth: 0,
                    borderColor: `#646464`,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                  },
                  {
                    left: 10,
                    width: 220,
                  },
                ],
                children: expect.objectContaining({
                  type: SizedHorizontallySymmetricalSafeAreaView,
                  props: {
                    bottom: true,
                    left: true,
                    right: true,
                    width: `fillsContainer`,
                    height: `fillsContainer`,
                    children: expect.objectContaining({
                      type: ContainerFillingKeyboardAvoidingView,
                      props: {
                        children: expect.objectContaining({
                          type: Text,
                          props: {
                            children: `Example Pop Over Content`,
                          },
                        }),
                      },
                    }),
                  },
                }),
              },
            }),
          },
        }),
      }),
    }),
  ]);

  expect(
    (
      (
        renderer.toTree()
          ?.rendered as ReadonlyArray<TestRenderer.ReactTestRendererTree>
      )[0] as TestRenderer.ReactTestRendererTree
    ).type
  ).toBeAFunctionWithTheStaticProperties({
    pickerButton: { controlStyle },
  });

  renderer.unmount();
});

test(`correctly handles layout changes which only change width`, () => {
  Dimensions.set({
    window: {
      width: 640,
      height: 480,
      scale: 2.42,
      fontScale: 3.51,
    },
  });

  const controlStyle: ControlStyle = {
    fontFamily: `Example Font Family`,
    fontSize: 37,
    paddingVertical: 12,
    paddingHorizontal: 29,
    blurredValid: {
      textColor: `#FFEE00`,
      placeholderColor: `#E7AA32`,
      backgroundColor: `#32AE12`,
      radius: 5,
      border: {
        width: 4,
        color: `#FF00FF`,
      },
    },
    blurredInvalid: {
      textColor: `#99FE88`,
      placeholderColor: `#CACA3A`,
      backgroundColor: `#259284`,
      radius: 10,
      border: {
        width: 6,
        color: `#9A9A8E`,
      },
    },
    focusedValid: {
      textColor: `#55EA13`,
      placeholderColor: `#273346`,
      backgroundColor: `#CABA99`,
      radius: 3,
      border: {
        width: 5,
        color: `#646464`,
      },
    },
    focusedInvalid: {
      textColor: `#ABAADE`,
      placeholderColor: `#47ADAD`,
      backgroundColor: `#32AA88`,
      radius: 47,
      border: {
        width: 12,
        color: `#98ADAA`,
      },
    },
    disabledValid: {
      textColor: `#AE2195`,
      placeholderColor: `#FFAAEE`,
      backgroundColor: `#772728`,
      radius: 100,
      border: {
        width: 14,
        color: `#5E5E5E`,
      },
    },
    disabledInvalid: {
      textColor: `#340297`,
      placeholderColor: `#233832`,
      backgroundColor: `#938837`,
      radius: 2,
      border: {
        width: 19,
        color: `#573829`,
      },
    },
  };

  const Component = createFullHeightPopoverComponent(controlStyle);

  const renderer = TestRenderer.create(
    <SafeAreaInsetsContext.Provider
      value={{ top: 16, bottom: 60, left: 53, right: 24 }}
    >
      <Component
        label="Example Button Content"
        placeholder="Example Placeholder"
        valid
        disabled={false}
        children={() => <Text>Example Pop Over Content</Text>}
      />
    </SafeAreaInsetsContext.Provider>
  );

  TestRenderer.act(() => {
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).props[
      `onMeasure`
    ](123, 456, 220, 20, 70, 310);
  });

  TestRenderer.act(() => {
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).props[
      `onPress`
    ]();
  });

  TestRenderer.act(() => {
    (
      (
        renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree[]
      )[0] as TestRenderer.ReactTestRendererTree
    ).props[`onMeasure`](123, 456, 190, 20, 70, 310);
  });

  expect(renderer.toTree()?.rendered).toEqual([
    expect.objectContaining({
      props: {
        onMeasure: expect.any(Function),
        onPress: expect.any(Function),
        disabled: false,
        label: `Example Button Content`,
        placeholder: `Example Placeholder`,
        valid: true,
      },
    }),
    expect.objectContaining({
      nodeType: `component`,
      type: SimpleModal,
      props: expect.objectContaining({
        onClose: expect.any(Function),
        children: expect.objectContaining({
          type: SizedHorizontallySymmetricalSafeAreaView,
          props: {
            top: true,
            width: `fillsContainer`,
            height: `fillsContainer`,
            children: expect.objectContaining({
              type: View,
              props: {
                style: [
                  {
                    height: `100%`,
                    backgroundColor: `#CABA99`,
                    borderWidth: 5,
                    borderBottomWidth: 0,
                    borderColor: `#646464`,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                  },
                  {
                    left: 70,
                    width: 190,
                  },
                ],
                children: expect.objectContaining({
                  type: SizedHorizontallySymmetricalSafeAreaView,
                  props: {
                    bottom: true,
                    left: true,
                    right: true,
                    width: `fillsContainer`,
                    height: `fillsContainer`,
                    children: expect.objectContaining({
                      type: ContainerFillingKeyboardAvoidingView,
                      props: {
                        children: expect.objectContaining({
                          type: Text,
                          props: {
                            children: `Example Pop Over Content`,
                          },
                        }),
                      },
                    }),
                  },
                }),
              },
            }),
          },
        }),
      }),
    }),
  ]);

  expect(
    (
      (
        renderer.toTree()
          ?.rendered as ReadonlyArray<TestRenderer.ReactTestRendererTree>
      )[0] as TestRenderer.ReactTestRendererTree
    ).type
  ).toBeAFunctionWithTheStaticProperties({
    pickerButton: { controlStyle },
  });

  renderer.unmount();
});

test(`correctly handles layout changes which only move on the Y axis`, () => {
  Dimensions.set({
    window: {
      width: 640,
      height: 480,
      scale: 2.42,
      fontScale: 3.51,
    },
  });

  const controlStyle: ControlStyle = {
    fontFamily: `Example Font Family`,
    fontSize: 37,
    paddingVertical: 12,
    paddingHorizontal: 29,
    blurredValid: {
      textColor: `#FFEE00`,
      placeholderColor: `#E7AA32`,
      backgroundColor: `#32AE12`,
      radius: 5,
      border: {
        width: 4,
        color: `#FF00FF`,
      },
    },
    blurredInvalid: {
      textColor: `#99FE88`,
      placeholderColor: `#CACA3A`,
      backgroundColor: `#259284`,
      radius: 10,
      border: {
        width: 6,
        color: `#9A9A8E`,
      },
    },
    focusedValid: {
      textColor: `#55EA13`,
      placeholderColor: `#273346`,
      backgroundColor: `#CABA99`,
      radius: 3,
      border: {
        width: 5,
        color: `#646464`,
      },
    },
    focusedInvalid: {
      textColor: `#ABAADE`,
      placeholderColor: `#47ADAD`,
      backgroundColor: `#32AA88`,
      radius: 47,
      border: {
        width: 12,
        color: `#98ADAA`,
      },
    },
    disabledValid: {
      textColor: `#AE2195`,
      placeholderColor: `#FFAAEE`,
      backgroundColor: `#772728`,
      radius: 100,
      border: {
        width: 14,
        color: `#5E5E5E`,
      },
    },
    disabledInvalid: {
      textColor: `#340297`,
      placeholderColor: `#233832`,
      backgroundColor: `#938837`,
      radius: 2,
      border: {
        width: 19,
        color: `#573829`,
      },
    },
  };

  const Component = createFullHeightPopoverComponent(controlStyle);

  const renderer = TestRenderer.create(
    <SafeAreaInsetsContext.Provider
      value={{ top: 16, bottom: 60, left: 53, right: 24 }}
    >
      <Component
        label="Example Button Content"
        placeholder="Example Placeholder"
        valid
        disabled={false}
        children={() => <Text>Example Pop Over Content</Text>}
      />
    </SafeAreaInsetsContext.Provider>
  );

  TestRenderer.act(() => {
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).props[
      `onMeasure`
    ](123, 456, 220, 20, 70, 310);
  });

  TestRenderer.act(() => {
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).props[
      `onPress`
    ]();
  });

  TestRenderer.act(() => {
    (
      (
        renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree[]
      )[0] as TestRenderer.ReactTestRendererTree
    ).props[`onMeasure`](123, 456, 220, 20, 70, 300);
  });

  expect(renderer.toTree()?.rendered).toEqual([
    expect.objectContaining({
      props: {
        onMeasure: expect.any(Function),
        onPress: expect.any(Function),
        disabled: false,
        label: `Example Button Content`,
        placeholder: `Example Placeholder`,
        valid: true,
      },
    }),
    expect.objectContaining({
      nodeType: `component`,
      type: SimpleModal,
      props: expect.objectContaining({
        onClose: expect.any(Function),
        children: expect.objectContaining({
          type: SizedHorizontallySymmetricalSafeAreaView,
          props: {
            top: true,
            width: `fillsContainer`,
            height: `fillsContainer`,
            children: expect.objectContaining({
              type: View,
              props: {
                style: [
                  {
                    height: `100%`,
                    backgroundColor: `#CABA99`,
                    borderWidth: 5,
                    borderBottomWidth: 0,
                    borderColor: `#646464`,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                  },
                  {
                    left: 70,
                    width: 220,
                  },
                ],
                children: expect.objectContaining({
                  type: SizedHorizontallySymmetricalSafeAreaView,
                  props: {
                    bottom: true,
                    left: true,
                    right: true,
                    width: `fillsContainer`,
                    height: `fillsContainer`,
                    children: expect.objectContaining({
                      type: ContainerFillingKeyboardAvoidingView,
                      props: {
                        children: expect.objectContaining({
                          type: Text,
                          props: {
                            children: `Example Pop Over Content`,
                          },
                        }),
                      },
                    }),
                  },
                }),
              },
            }),
          },
        }),
      }),
    }),
  ]);

  expect(
    (
      (
        renderer.toTree()
          ?.rendered as ReadonlyArray<TestRenderer.ReactTestRendererTree>
      )[0] as TestRenderer.ReactTestRendererTree
    ).type
  ).toBeAFunctionWithTheStaticProperties({
    pickerButton: { controlStyle },
  });

  renderer.unmount();
});

test(`correctly handles layout changes which only change height`, () => {
  Dimensions.set({
    window: {
      width: 640,
      height: 480,
      scale: 2.42,
      fontScale: 3.51,
    },
  });

  const controlStyle: ControlStyle = {
    fontFamily: `Example Font Family`,
    fontSize: 37,
    paddingVertical: 12,
    paddingHorizontal: 29,
    blurredValid: {
      textColor: `#FFEE00`,
      placeholderColor: `#E7AA32`,
      backgroundColor: `#32AE12`,
      radius: 5,
      border: {
        width: 4,
        color: `#FF00FF`,
      },
    },
    blurredInvalid: {
      textColor: `#99FE88`,
      placeholderColor: `#CACA3A`,
      backgroundColor: `#259284`,
      radius: 10,
      border: {
        width: 6,
        color: `#9A9A8E`,
      },
    },
    focusedValid: {
      textColor: `#55EA13`,
      placeholderColor: `#273346`,
      backgroundColor: `#CABA99`,
      radius: 3,
      border: {
        width: 5,
        color: `#646464`,
      },
    },
    focusedInvalid: {
      textColor: `#ABAADE`,
      placeholderColor: `#47ADAD`,
      backgroundColor: `#32AA88`,
      radius: 47,
      border: {
        width: 12,
        color: `#98ADAA`,
      },
    },
    disabledValid: {
      textColor: `#AE2195`,
      placeholderColor: `#FFAAEE`,
      backgroundColor: `#772728`,
      radius: 100,
      border: {
        width: 14,
        color: `#5E5E5E`,
      },
    },
    disabledInvalid: {
      textColor: `#340297`,
      placeholderColor: `#233832`,
      backgroundColor: `#938837`,
      radius: 2,
      border: {
        width: 19,
        color: `#573829`,
      },
    },
  };

  const Component = createFullHeightPopoverComponent(controlStyle);

  const renderer = TestRenderer.create(
    <SafeAreaInsetsContext.Provider
      value={{ top: 16, bottom: 60, left: 53, right: 24 }}
    >
      <Component
        label="Example Button Content"
        placeholder="Example Placeholder"
        valid
        disabled={false}
        children={() => <Text>Example Pop Over Content</Text>}
      />
    </SafeAreaInsetsContext.Provider>
  );

  TestRenderer.act(() => {
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).props[
      `onMeasure`
    ](123, 45, 220, 20, 70, 310);
  });

  TestRenderer.act(() => {
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).props[
      `onPress`
    ]();
  });

  TestRenderer.act(() => {
    (
      (
        renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree[]
      )[0] as TestRenderer.ReactTestRendererTree
    ).props[`onMeasure`](123, 456, 220, 15, 70, 310);
  });

  expect(renderer.toTree()?.rendered).toEqual([
    expect.objectContaining({
      props: {
        onMeasure: expect.any(Function),
        onPress: expect.any(Function),
        disabled: false,
        label: `Example Button Content`,
        placeholder: `Example Placeholder`,
        valid: true,
      },
    }),
    expect.objectContaining({
      nodeType: `component`,
      type: SimpleModal,
      props: expect.objectContaining({
        onClose: expect.any(Function),
        children: expect.objectContaining({
          type: SizedHorizontallySymmetricalSafeAreaView,
          props: {
            top: true,
            width: `fillsContainer`,
            height: `fillsContainer`,
            children: expect.objectContaining({
              type: View,
              props: {
                style: [
                  {
                    height: `100%`,
                    backgroundColor: `#CABA99`,
                    borderWidth: 5,
                    borderBottomWidth: 0,
                    borderColor: `#646464`,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                  },
                  {
                    left: 70,
                    width: 220,
                  },
                ],
                children: expect.objectContaining({
                  type: SizedHorizontallySymmetricalSafeAreaView,
                  props: {
                    bottom: true,
                    left: true,
                    right: true,
                    width: `fillsContainer`,
                    height: `fillsContainer`,
                    children: expect.objectContaining({
                      type: ContainerFillingKeyboardAvoidingView,
                      props: {
                        children: expect.objectContaining({
                          type: Text,
                          props: {
                            children: `Example Pop Over Content`,
                          },
                        }),
                      },
                    }),
                  },
                }),
              },
            }),
          },
        }),
      }),
    }),
  ]);

  expect(
    (
      (
        renderer.toTree()
          ?.rendered as ReadonlyArray<TestRenderer.ReactTestRendererTree>
      )[0] as TestRenderer.ReactTestRendererTree
    ).type
  ).toBeAFunctionWithTheStaticProperties({
    pickerButton: { controlStyle },
  });

  renderer.unmount();
});

test(`correctly handles layout changes which have no effect`, () => {
  Dimensions.set({
    window: {
      width: 640,
      height: 480,
      scale: 2.42,
      fontScale: 3.51,
    },
  });

  const controlStyle: ControlStyle = {
    fontFamily: `Example Font Family`,
    fontSize: 37,
    paddingVertical: 12,
    paddingHorizontal: 29,
    blurredValid: {
      textColor: `#FFEE00`,
      placeholderColor: `#E7AA32`,
      backgroundColor: `#32AE12`,
      radius: 5,
      border: {
        width: 4,
        color: `#FF00FF`,
      },
    },
    blurredInvalid: {
      textColor: `#99FE88`,
      placeholderColor: `#CACA3A`,
      backgroundColor: `#259284`,
      radius: 10,
      border: {
        width: 6,
        color: `#9A9A8E`,
      },
    },
    focusedValid: {
      textColor: `#55EA13`,
      placeholderColor: `#273346`,
      backgroundColor: `#CABA99`,
      radius: 3,
      border: {
        width: 5,
        color: `#646464`,
      },
    },
    focusedInvalid: {
      textColor: `#ABAADE`,
      placeholderColor: `#47ADAD`,
      backgroundColor: `#32AA88`,
      radius: 47,
      border: {
        width: 12,
        color: `#98ADAA`,
      },
    },
    disabledValid: {
      textColor: `#AE2195`,
      placeholderColor: `#FFAAEE`,
      backgroundColor: `#772728`,
      radius: 100,
      border: {
        width: 14,
        color: `#5E5E5E`,
      },
    },
    disabledInvalid: {
      textColor: `#340297`,
      placeholderColor: `#233832`,
      backgroundColor: `#938837`,
      radius: 2,
      border: {
        width: 19,
        color: `#573829`,
      },
    },
  };

  const Component = createFullHeightPopoverComponent(controlStyle);

  const renderer = TestRenderer.create(
    <SafeAreaInsetsContext.Provider
      value={{ top: 16, bottom: 60, left: 53, right: 24 }}
    >
      <Component
        label="Example Button Content"
        placeholder="Example Placeholder"
        valid
        disabled={false}
        children={() => <Text>Example Pop Over Content</Text>}
      />
    </SafeAreaInsetsContext.Provider>
  );

  TestRenderer.act(() => {
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).props[
      `onMeasure`
    ](123, 456, 220, 20, 70, 310);
  });

  TestRenderer.act(() => {
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).props[
      `onPress`
    ]();
  });

  TestRenderer.act(() => {
    (
      (
        renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree[]
      )[0] as TestRenderer.ReactTestRendererTree
    ).props[`onMeasure`](123, 456, 220, 20, 70, 310);
  });

  expect(renderer.toTree()?.rendered).toEqual([
    expect.objectContaining({
      props: {
        onMeasure: expect.any(Function),
        onPress: expect.any(Function),
        disabled: false,
        label: `Example Button Content`,
        placeholder: `Example Placeholder`,
        valid: true,
      },
    }),
    expect.objectContaining({
      nodeType: `component`,
      type: SimpleModal,
      props: expect.objectContaining({
        onClose: expect.any(Function),
        children: expect.objectContaining({
          type: SizedHorizontallySymmetricalSafeAreaView,
          props: {
            top: true,
            width: `fillsContainer`,
            height: `fillsContainer`,
            children: expect.objectContaining({
              type: View,
              props: {
                style: [
                  {
                    height: `100%`,
                    backgroundColor: `#CABA99`,
                    borderWidth: 5,
                    borderBottomWidth: 0,
                    borderColor: `#646464`,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                  },
                  {
                    left: 70,
                    width: 220,
                  },
                ],
                children: expect.objectContaining({
                  type: SizedHorizontallySymmetricalSafeAreaView,
                  props: {
                    bottom: true,
                    left: true,
                    right: true,
                    width: `fillsContainer`,
                    height: `fillsContainer`,
                    children: expect.objectContaining({
                      type: ContainerFillingKeyboardAvoidingView,
                      props: {
                        children: expect.objectContaining({
                          type: Text,
                          props: {
                            children: `Example Pop Over Content`,
                          },
                        }),
                      },
                    }),
                  },
                }),
              },
            }),
          },
        }),
      }),
    }),
  ]);

  expect(
    (
      (
        renderer.toTree()
          ?.rendered as ReadonlyArray<TestRenderer.ReactTestRendererTree>
      )[0] as TestRenderer.ReactTestRendererTree
    ).type
  ).toBeAFunctionWithTheStaticProperties({
    pickerButton: { controlStyle },
  });

  renderer.unmount();
});

test(`can be enabled after being created disabled`, async () => {
  Dimensions.set({
    window: {
      width: 640,
      height: 480,
      scale: 2.42,
      fontScale: 3.51,
    },
  });

  const controlStyle: ControlStyle = {
    fontFamily: `Example Font Family`,
    fontSize: 37,
    paddingVertical: 12,
    paddingHorizontal: 29,
    blurredValid: {
      textColor: `#FFEE00`,
      placeholderColor: `#E7AA32`,
      backgroundColor: `#32AE12`,
      radius: 5,
      border: {
        width: 4,
        color: `#FF00FF`,
      },
    },
    blurredInvalid: {
      textColor: `#99FE88`,
      placeholderColor: `#CACA3A`,
      backgroundColor: `#259284`,
      radius: 10,
      border: {
        width: 6,
        color: `#9A9A8E`,
      },
    },
    focusedValid: {
      textColor: `#55EA13`,
      placeholderColor: `#273346`,
      backgroundColor: `#CABA99`,
      radius: 3,
      border: {
        width: 5,
        color: `#646464`,
      },
    },
    focusedInvalid: {
      textColor: `#ABAADE`,
      placeholderColor: `#47ADAD`,
      backgroundColor: `#32AA88`,
      radius: 47,
      border: {
        width: 12,
        color: `#98ADAA`,
      },
    },
    disabledValid: {
      textColor: `#AE2195`,
      placeholderColor: `#FFAAEE`,
      backgroundColor: `#772728`,
      radius: 100,
      border: {
        width: 14,
        color: `#5E5E5E`,
      },
    },
    disabledInvalid: {
      textColor: `#340297`,
      placeholderColor: `#233832`,
      backgroundColor: `#938837`,
      radius: 2,
      border: {
        width: 19,
        color: `#573829`,
      },
    },
  };

  const Component = createFullHeightPopoverComponent(controlStyle);

  const renderer = TestRenderer.create(
    <SafeAreaInsetsContext.Provider
      value={{ top: 16, bottom: 60, left: 53, right: 24 }}
    >
      <Component
        label="Example Button Content"
        placeholder="Example Placeholder"
        valid
        disabled
        children={() => <Text>Example Pop Over Content</Text>}
      />
    </SafeAreaInsetsContext.Provider>
  );

  TestRenderer.act(() => {
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).props[
      `onMeasure`
    ](123, 456, 220, 20, 70, 310);
  });

  TestRenderer.act(() => {
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).props[
      `onPress`
    ]();
  });

  TestRenderer.act(() => {
    Dimensions.set({
      window: {
        width: 640,
        height: 470,
        scale: 2.42,
        fontScale: 3.51,
      },
    });
  });

  renderer.update(
    <SafeAreaInsetsContext.Provider
      value={{ top: 16, bottom: 60, left: 53, right: 24 }}
    >
      <Component
        label="Example Button Content"
        placeholder="Example Placeholder"
        valid
        disabled={false}
        children={() => <Text>Example Pop Over Content</Text>}
      />
    </SafeAreaInsetsContext.Provider>
  );

  expect(renderer.toTree()?.rendered).toEqual(
    expect.objectContaining({
      props: {
        onMeasure: expect.any(Function),
        onPress: expect.any(Function),
        disabled: false,
        label: `Example Button Content`,
        placeholder: `Example Placeholder`,
        valid: true,
      },
    })
  );

  expect(
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).type
  ).toBeAFunctionWithTheStaticProperties({
    pickerButton: { controlStyle },
  });

  renderer.unmount();

  // Some aspect of unmounting seems to be asynchronous in this test, and not
  // waiting seems to mean that window dimension changes in other tests trigger
  // changes here.
  await new Promise((resolve) => setTimeout(resolve, 10));
});

test(`closes if disabled while open`, () => {
  Dimensions.set({
    window: {
      width: 640,
      height: 480,
      scale: 2.42,
      fontScale: 3.51,
    },
  });

  const controlStyle: ControlStyle = {
    fontFamily: `Example Font Family`,
    fontSize: 37,
    paddingVertical: 12,
    paddingHorizontal: 29,
    blurredValid: {
      textColor: `#FFEE00`,
      placeholderColor: `#E7AA32`,
      backgroundColor: `#32AE12`,
      radius: 5,
      border: {
        width: 4,
        color: `#FF00FF`,
      },
    },
    blurredInvalid: {
      textColor: `#99FE88`,
      placeholderColor: `#CACA3A`,
      backgroundColor: `#259284`,
      radius: 10,
      border: {
        width: 6,
        color: `#9A9A8E`,
      },
    },
    focusedValid: {
      textColor: `#55EA13`,
      placeholderColor: `#273346`,
      backgroundColor: `#CABA99`,
      radius: 3,
      border: {
        width: 5,
        color: `#646464`,
      },
    },
    focusedInvalid: {
      textColor: `#ABAADE`,
      placeholderColor: `#47ADAD`,
      backgroundColor: `#32AA88`,
      radius: 47,
      border: {
        width: 12,
        color: `#98ADAA`,
      },
    },
    disabledValid: {
      textColor: `#AE2195`,
      placeholderColor: `#FFAAEE`,
      backgroundColor: `#772728`,
      radius: 100,
      border: {
        width: 14,
        color: `#5E5E5E`,
      },
    },
    disabledInvalid: {
      textColor: `#340297`,
      placeholderColor: `#233832`,
      backgroundColor: `#938837`,
      radius: 2,
      border: {
        width: 19,
        color: `#573829`,
      },
    },
  };

  const Component = createFullHeightPopoverComponent(controlStyle);

  const renderer = TestRenderer.create(
    <SafeAreaInsetsContext.Provider
      value={{ top: 16, bottom: 60, left: 53, right: 24 }}
    >
      <Component
        label="Example Button Content"
        placeholder="Example Placeholder"
        valid
        disabled={false}
        children={() => <Text>Example Pop Over Content</Text>}
      />
    </SafeAreaInsetsContext.Provider>
  );

  TestRenderer.act(() => {
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).props[
      `onMeasure`
    ](123, 456, 220, 20, 70, 310);
  });

  TestRenderer.act(() => {
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).props[
      `onPress`
    ]();
  });

  renderer.update(
    <SafeAreaInsetsContext.Provider
      value={{ top: 16, bottom: 60, left: 53, right: 24 }}
    >
      <Component
        label="Example Button Content"
        placeholder="Example Placeholder"
        valid
        disabled
        children={() => <Text>Example Pop Over Content</Text>}
      />
    </SafeAreaInsetsContext.Provider>
  );

  expect(renderer.toTree()?.rendered).toEqual(
    expect.objectContaining({
      props: {
        onMeasure: expect.any(Function),
        onPress: expect.any(Function),
        disabled: true,
        label: `Example Button Content`,
        placeholder: `Example Placeholder`,
        valid: true,
      },
    })
  );

  expect(
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).type
  ).toBeAFunctionWithTheStaticProperties({
    pickerButton: { controlStyle },
  });

  renderer.unmount();
});

test(`does not re-open if enabled after disabled while open`, () => {
  Dimensions.set({
    window: {
      width: 640,
      height: 480,
      scale: 2.42,
      fontScale: 3.51,
    },
  });

  const controlStyle: ControlStyle = {
    fontFamily: `Example Font Family`,
    fontSize: 37,
    paddingVertical: 12,
    paddingHorizontal: 29,
    blurredValid: {
      textColor: `#FFEE00`,
      placeholderColor: `#E7AA32`,
      backgroundColor: `#32AE12`,
      radius: 5,
      border: {
        width: 4,
        color: `#FF00FF`,
      },
    },
    blurredInvalid: {
      textColor: `#99FE88`,
      placeholderColor: `#CACA3A`,
      backgroundColor: `#259284`,
      radius: 10,
      border: {
        width: 6,
        color: `#9A9A8E`,
      },
    },
    focusedValid: {
      textColor: `#55EA13`,
      placeholderColor: `#273346`,
      backgroundColor: `#CABA99`,
      radius: 3,
      border: {
        width: 5,
        color: `#646464`,
      },
    },
    focusedInvalid: {
      textColor: `#ABAADE`,
      placeholderColor: `#47ADAD`,
      backgroundColor: `#32AA88`,
      radius: 47,
      border: {
        width: 12,
        color: `#98ADAA`,
      },
    },
    disabledValid: {
      textColor: `#AE2195`,
      placeholderColor: `#FFAAEE`,
      backgroundColor: `#772728`,
      radius: 100,
      border: {
        width: 14,
        color: `#5E5E5E`,
      },
    },
    disabledInvalid: {
      textColor: `#340297`,
      placeholderColor: `#233832`,
      backgroundColor: `#938837`,
      radius: 2,
      border: {
        width: 19,
        color: `#573829`,
      },
    },
  };

  const Component = createFullHeightPopoverComponent(controlStyle);

  const renderer = TestRenderer.create(
    <SafeAreaInsetsContext.Provider
      value={{ top: 16, bottom: 60, left: 53, right: 24 }}
    >
      <Component
        label="Example Button Content"
        placeholder="Example Placeholder"
        valid
        disabled={false}
        children={() => <Text>Example Pop Over Content</Text>}
      />
    </SafeAreaInsetsContext.Provider>
  );

  TestRenderer.act(() => {
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).props[
      `onMeasure`
    ](123, 456, 220, 20, 70, 310);
  });

  TestRenderer.act(() => {
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).props[
      `onPress`
    ]();
  });

  renderer.update(
    <SafeAreaInsetsContext.Provider
      value={{ top: 16, bottom: 60, left: 53, right: 24 }}
    >
      <Component
        label="Example Button Content"
        placeholder="Example Placeholder"
        valid
        disabled
        children={() => <Text>Example Pop Over Content</Text>}
      />
    </SafeAreaInsetsContext.Provider>
  );

  renderer.update(
    <SafeAreaInsetsContext.Provider
      value={{ top: 16, bottom: 60, left: 53, right: 24 }}
    >
      <Component
        label="Example Button Content"
        placeholder="Example Placeholder"
        valid
        disabled={false}
        children={() => <Text>Example Pop Over Content</Text>}
      />
    </SafeAreaInsetsContext.Provider>
  );

  expect(renderer.toTree()?.rendered).toEqual(
    expect.objectContaining({
      props: {
        onMeasure: expect.any(Function),
        onPress: expect.any(Function),
        disabled: false,
        label: `Example Button Content`,
        placeholder: `Example Placeholder`,
        valid: true,
      },
    })
  );

  expect(
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).type
  ).toBeAFunctionWithTheStaticProperties({
    pickerButton: { controlStyle },
  });

  renderer.unmount();
});

test(`can be re-opened once re-enabled after disabled while open`, () => {
  Dimensions.set({
    window: {
      width: 640,
      height: 480,
      scale: 2.42,
      fontScale: 3.51,
    },
  });

  const controlStyle: ControlStyle = {
    fontFamily: `Example Font Family`,
    fontSize: 37,
    paddingVertical: 12,
    paddingHorizontal: 29,
    blurredValid: {
      textColor: `#FFEE00`,
      placeholderColor: `#E7AA32`,
      backgroundColor: `#32AE12`,
      radius: 5,
      border: {
        width: 4,
        color: `#FF00FF`,
      },
    },
    blurredInvalid: {
      textColor: `#99FE88`,
      placeholderColor: `#CACA3A`,
      backgroundColor: `#259284`,
      radius: 10,
      border: {
        width: 6,
        color: `#9A9A8E`,
      },
    },
    focusedValid: {
      textColor: `#55EA13`,
      placeholderColor: `#273346`,
      backgroundColor: `#CABA99`,
      radius: 3,
      border: {
        width: 5,
        color: `#646464`,
      },
    },
    focusedInvalid: {
      textColor: `#ABAADE`,
      placeholderColor: `#47ADAD`,
      backgroundColor: `#32AA88`,
      radius: 47,
      border: {
        width: 12,
        color: `#98ADAA`,
      },
    },
    disabledValid: {
      textColor: `#AE2195`,
      placeholderColor: `#FFAAEE`,
      backgroundColor: `#772728`,
      radius: 100,
      border: {
        width: 14,
        color: `#5E5E5E`,
      },
    },
    disabledInvalid: {
      textColor: `#340297`,
      placeholderColor: `#233832`,
      backgroundColor: `#938837`,
      radius: 2,
      border: {
        width: 19,
        color: `#573829`,
      },
    },
  };

  const Component = createFullHeightPopoverComponent(controlStyle);

  const renderer = TestRenderer.create(
    <SafeAreaInsetsContext.Provider
      value={{ top: 16, bottom: 60, left: 53, right: 24 }}
    >
      <Component
        label="Example Button Content"
        placeholder="Example Placeholder"
        valid
        disabled={false}
        children={() => <Text>Example Pop Over Content</Text>}
      />
    </SafeAreaInsetsContext.Provider>
  );

  TestRenderer.act(() => {
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).props[
      `onMeasure`
    ](123, 456, 220, 20, 70, 310);
  });

  TestRenderer.act(() => {
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).props[
      `onPress`
    ]();
  });

  renderer.update(
    <SafeAreaInsetsContext.Provider
      value={{ top: 16, bottom: 60, left: 53, right: 24 }}
    >
      <Component
        label="Example Button Content"
        placeholder="Example Placeholder"
        valid
        disabled
        children={() => <Text>Example Pop Over Content</Text>}
      />
    </SafeAreaInsetsContext.Provider>
  );

  renderer.update(
    <SafeAreaInsetsContext.Provider
      value={{ top: 16, bottom: 60, left: 53, right: 24 }}
    >
      <Component
        label="Example Button Content"
        placeholder="Example Placeholder"
        valid
        disabled={false}
        children={() => <Text>Example Pop Over Content</Text>}
      />
    </SafeAreaInsetsContext.Provider>
  );

  TestRenderer.act(() => {
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).props[
      `onPress`
    ]();
  });

  expect(renderer.toTree()?.rendered).toEqual([
    expect.objectContaining({
      props: {
        onMeasure: expect.any(Function),
        onPress: expect.any(Function),
        disabled: false,
        label: `Example Button Content`,
        placeholder: `Example Placeholder`,
        valid: true,
      },
    }),
    expect.objectContaining({
      nodeType: `component`,
      type: SimpleModal,
      props: expect.objectContaining({
        onClose: expect.any(Function),
        children: expect.objectContaining({
          type: SizedHorizontallySymmetricalSafeAreaView,
          props: {
            top: true,
            width: `fillsContainer`,
            height: `fillsContainer`,
            children: expect.objectContaining({
              type: View,
              props: {
                style: [
                  {
                    height: `100%`,
                    backgroundColor: `#CABA99`,
                    borderWidth: 5,
                    borderBottomWidth: 0,
                    borderColor: `#646464`,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                  },
                  {
                    left: 70,
                    width: 220,
                  },
                ],
                children: expect.objectContaining({
                  type: SizedHorizontallySymmetricalSafeAreaView,
                  props: {
                    bottom: true,
                    left: true,
                    right: true,
                    width: `fillsContainer`,
                    height: `fillsContainer`,
                    children: expect.objectContaining({
                      type: ContainerFillingKeyboardAvoidingView,
                      props: {
                        children: expect.objectContaining({
                          type: Text,
                          props: {
                            children: `Example Pop Over Content`,
                          },
                        }),
                      },
                    }),
                  },
                }),
              },
            }),
          },
        }),
      }),
    }),
  ]);

  expect(
    (
      (
        renderer.toTree()
          ?.rendered as ReadonlyArray<TestRenderer.ReactTestRendererTree>
      )[0] as TestRenderer.ReactTestRendererTree
    ).type
  ).toBeAFunctionWithTheStaticProperties({
    pickerButton: { controlStyle },
  });

  renderer.unmount();
});

test(`closes when the modal is dismissed`, () => {
  Dimensions.set({
    window: {
      width: 640,
      height: 480,
      scale: 2.42,
      fontScale: 3.51,
    },
  });

  const controlStyle: ControlStyle = {
    fontFamily: `Example Font Family`,
    fontSize: 37,
    paddingVertical: 12,
    paddingHorizontal: 29,
    blurredValid: {
      textColor: `#FFEE00`,
      placeholderColor: `#E7AA32`,
      backgroundColor: `#32AE12`,
      radius: 5,
      border: {
        width: 4,
        color: `#FF00FF`,
      },
    },
    blurredInvalid: {
      textColor: `#99FE88`,
      placeholderColor: `#CACA3A`,
      backgroundColor: `#259284`,
      radius: 10,
      border: {
        width: 6,
        color: `#9A9A8E`,
      },
    },
    focusedValid: {
      textColor: `#55EA13`,
      placeholderColor: `#273346`,
      backgroundColor: `#CABA99`,
      radius: 3,
      border: {
        width: 5,
        color: `#646464`,
      },
    },
    focusedInvalid: {
      textColor: `#ABAADE`,
      placeholderColor: `#47ADAD`,
      backgroundColor: `#32AA88`,
      radius: 47,
      border: {
        width: 12,
        color: `#98ADAA`,
      },
    },
    disabledValid: {
      textColor: `#AE2195`,
      placeholderColor: `#FFAAEE`,
      backgroundColor: `#772728`,
      radius: 100,
      border: {
        width: 14,
        color: `#5E5E5E`,
      },
    },
    disabledInvalid: {
      textColor: `#340297`,
      placeholderColor: `#233832`,
      backgroundColor: `#938837`,
      radius: 2,
      border: {
        width: 19,
        color: `#573829`,
      },
    },
  };

  const Component = createFullHeightPopoverComponent(controlStyle);

  const renderer = TestRenderer.create(
    <SafeAreaInsetsContext.Provider
      value={{ top: 16, bottom: 60, left: 53, right: 24 }}
    >
      <Component
        label="Example Button Content"
        placeholder="Example Placeholder"
        valid
        disabled={false}
        children={() => <Text>Example Pop Over Content</Text>}
      />
    </SafeAreaInsetsContext.Provider>
  );

  TestRenderer.act(() => {
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).props[
      `onMeasure`
    ](123, 456, 220, 20, 70, 310);
  });

  TestRenderer.act(() => {
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).props[
      `onPress`
    ]();
  });

  TestRenderer.act(() => {
    (
      (
        renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree[]
      )[1] as TestRenderer.ReactTestRendererTree
    ).props[`onClose`]();
  });

  expect(renderer.toTree()?.rendered).toEqual(
    expect.objectContaining({
      props: {
        onMeasure: expect.any(Function),
        onPress: expect.any(Function),
        disabled: false,
        label: `Example Button Content`,
        placeholder: `Example Placeholder`,
        valid: true,
      },
    })
  );

  expect(
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).type
  ).toBeAFunctionWithTheStaticProperties({
    pickerButton: { controlStyle },
  });

  renderer.unmount();
});

test(`closes when the close callback is invoked`, () => {
  Dimensions.set({
    window: {
      width: 640,
      height: 480,
      scale: 2.42,
      fontScale: 3.51,
    },
  });

  const controlStyle: ControlStyle = {
    fontFamily: `Example Font Family`,
    fontSize: 37,
    paddingVertical: 12,
    paddingHorizontal: 29,
    blurredValid: {
      textColor: `#FFEE00`,
      placeholderColor: `#E7AA32`,
      backgroundColor: `#32AE12`,
      radius: 5,
      border: {
        width: 4,
        color: `#FF00FF`,
      },
    },
    blurredInvalid: {
      textColor: `#99FE88`,
      placeholderColor: `#CACA3A`,
      backgroundColor: `#259284`,
      radius: 10,
      border: {
        width: 6,
        color: `#9A9A8E`,
      },
    },
    focusedValid: {
      textColor: `#55EA13`,
      placeholderColor: `#273346`,
      backgroundColor: `#CABA99`,
      radius: 3,
      border: {
        width: 5,
        color: `#646464`,
      },
    },
    focusedInvalid: {
      textColor: `#ABAADE`,
      placeholderColor: `#47ADAD`,
      backgroundColor: `#32AA88`,
      radius: 47,
      border: {
        width: 12,
        color: `#98ADAA`,
      },
    },
    disabledValid: {
      textColor: `#AE2195`,
      placeholderColor: `#FFAAEE`,
      backgroundColor: `#772728`,
      radius: 100,
      border: {
        width: 14,
        color: `#5E5E5E`,
      },
    },
    disabledInvalid: {
      textColor: `#340297`,
      placeholderColor: `#233832`,
      backgroundColor: `#938837`,
      radius: 2,
      border: {
        width: 19,
        color: `#573829`,
      },
    },
  };

  const Component = createFullHeightPopoverComponent(controlStyle);
  const children = jest.fn(() => <Text>Example Pop Over Content</Text>);

  const renderer = TestRenderer.create(
    <SafeAreaInsetsContext.Provider
      value={{ top: 16, bottom: 60, left: 53, right: 24 }}
    >
      <Component
        label="Example Button Content"
        placeholder="Example Placeholder"
        valid
        disabled={false}
        children={children}
      />
    </SafeAreaInsetsContext.Provider>
  );

  TestRenderer.act(() => {
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).props[
      `onMeasure`
    ](123, 456, 220, 20, 70, 310);
  });

  TestRenderer.act(() => {
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).props[
      `onPress`
    ]();
  });

  TestRenderer.act(() => {
    expect(children).toHaveBeenCalledTimes(1);
    (children.mock.calls[0] as ReadonlyArray<() => void>)[0]?.();
  });

  expect(renderer.toTree()?.rendered).toEqual(
    expect.objectContaining({
      props: {
        onMeasure: expect.any(Function),
        onPress: expect.any(Function),
        disabled: false,
        label: `Example Button Content`,
        placeholder: `Example Placeholder`,
        valid: true,
      },
    })
  );

  expect(
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).type
  ).toBeAFunctionWithTheStaticProperties({
    pickerButton: { controlStyle },
  });

  renderer.unmount();
});

test(`renders as expected when invalid`, () => {
  Dimensions.set({
    window: {
      width: 640,
      height: 480,
      scale: 2.42,
      fontScale: 3.51,
    },
  });

  const controlStyle: ControlStyle = {
    fontFamily: `Example Font Family`,
    fontSize: 37,
    paddingVertical: 12,
    paddingHorizontal: 29,
    blurredValid: {
      textColor: `#FFEE00`,
      placeholderColor: `#E7AA32`,
      backgroundColor: `#32AE12`,
      radius: 5,
      border: {
        width: 4,
        color: `#FF00FF`,
      },
    },
    blurredInvalid: {
      textColor: `#99FE88`,
      placeholderColor: `#CACA3A`,
      backgroundColor: `#259284`,
      radius: 10,
      border: {
        width: 6,
        color: `#9A9A8E`,
      },
    },
    focusedValid: {
      textColor: `#55EA13`,
      placeholderColor: `#273346`,
      backgroundColor: `#CABA99`,
      radius: 3,
      border: {
        width: 5,
        color: `#646464`,
      },
    },
    focusedInvalid: {
      textColor: `#ABAADE`,
      placeholderColor: `#47ADAD`,
      backgroundColor: `#32AA88`,
      radius: 47,
      border: {
        width: 12,
        color: `#98ADAA`,
      },
    },
    disabledValid: {
      textColor: `#AE2195`,
      placeholderColor: `#FFAAEE`,
      backgroundColor: `#772728`,
      radius: 100,
      border: {
        width: 14,
        color: `#5E5E5E`,
      },
    },
    disabledInvalid: {
      textColor: `#340297`,
      placeholderColor: `#233832`,
      backgroundColor: `#938837`,
      radius: 2,
      border: {
        width: 19,
        color: `#573829`,
      },
    },
  };

  const Component = createFullHeightPopoverComponent(controlStyle);

  const renderer = TestRenderer.create(
    <SafeAreaInsetsContext.Provider
      value={{ top: 16, bottom: 60, left: 53, right: 24 }}
    >
      <Component
        label="Example Button Content"
        placeholder="Example Placeholder"
        valid={false}
        disabled={false}
        children={() => <Text>Example Pop Over Content</Text>}
      />
    </SafeAreaInsetsContext.Provider>
  );

  expect(renderer.toTree()?.rendered).toEqual(
    expect.objectContaining({
      props: {
        onMeasure: expect.any(Function),
        onPress: expect.any(Function),
        disabled: false,
        label: `Example Button Content`,
        placeholder: `Example Placeholder`,
        valid: false,
      },
    })
  );

  expect(
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).type
  ).toBeAFunctionWithTheStaticProperties({
    pickerButton: { controlStyle },
  });

  renderer.unmount();
});

test(`renders as expected when invalid when open`, () => {
  Dimensions.set({
    window: {
      width: 640,
      height: 480,
      scale: 2.42,
      fontScale: 3.51,
    },
  });

  const controlStyle: ControlStyle = {
    fontFamily: `Example Font Family`,
    fontSize: 37,
    paddingVertical: 12,
    paddingHorizontal: 29,
    blurredValid: {
      textColor: `#FFEE00`,
      placeholderColor: `#E7AA32`,
      backgroundColor: `#32AE12`,
      radius: 5,
      border: {
        width: 4,
        color: `#FF00FF`,
      },
    },
    blurredInvalid: {
      textColor: `#99FE88`,
      placeholderColor: `#CACA3A`,
      backgroundColor: `#259284`,
      radius: 10,
      border: {
        width: 6,
        color: `#9A9A8E`,
      },
    },
    focusedValid: {
      textColor: `#55EA13`,
      placeholderColor: `#273346`,
      backgroundColor: `#CABA99`,
      radius: 3,
      border: {
        width: 5,
        color: `#646464`,
      },
    },
    focusedInvalid: {
      textColor: `#ABAADE`,
      placeholderColor: `#47ADAD`,
      backgroundColor: `#32AA88`,
      radius: 47,
      border: {
        width: 12,
        color: `#98ADAA`,
      },
    },
    disabledValid: {
      textColor: `#AE2195`,
      placeholderColor: `#FFAAEE`,
      backgroundColor: `#772728`,
      radius: 100,
      border: {
        width: 14,
        color: `#5E5E5E`,
      },
    },
    disabledInvalid: {
      textColor: `#340297`,
      placeholderColor: `#233832`,
      backgroundColor: `#938837`,
      radius: 2,
      border: {
        width: 19,
        color: `#573829`,
      },
    },
  };

  const Component = createFullHeightPopoverComponent(controlStyle);

  const renderer = TestRenderer.create(
    <SafeAreaInsetsContext.Provider
      value={{ top: 16, bottom: 60, left: 53, right: 24 }}
    >
      <Component
        label={null}
        placeholder="Example Placeholder"
        valid={false}
        disabled={false}
        children={() => <Text>Example Pop Over Content</Text>}
      />
    </SafeAreaInsetsContext.Provider>
  );

  TestRenderer.act(() => {
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).props[
      `onMeasure`
    ](123, 456, 220, 20, 70, 320);
  });

  TestRenderer.act(() => {
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).props[
      `onPress`
    ]();
  });

  expect(renderer.toTree()?.rendered).toEqual([
    expect.objectContaining({
      props: {
        onMeasure: expect.any(Function),
        onPress: expect.any(Function),
        disabled: false,
        label: null,
        placeholder: `Example Placeholder`,
        valid: false,
      },
    }),
    expect.objectContaining({
      nodeType: `component`,
      type: SimpleModal,
      props: expect.objectContaining({
        onClose: expect.any(Function),
        children: expect.objectContaining({
          type: SizedHorizontallySymmetricalSafeAreaView,
          props: {
            top: true,
            width: `fillsContainer`,
            height: `fillsContainer`,
            children: expect.objectContaining({
              type: View,
              props: {
                style: [
                  {
                    height: `100%`,
                    backgroundColor: `#32AA88`,
                    borderWidth: 12,
                    borderBottomWidth: 0,
                    borderColor: `#98ADAA`,
                    borderTopLeftRadius: 47,
                    borderTopRightRadius: 47,
                  },
                  {
                    left: 70,
                    width: 220,
                  },
                ],
                children: expect.objectContaining({
                  type: SizedHorizontallySymmetricalSafeAreaView,
                  props: {
                    bottom: true,
                    left: true,
                    right: true,
                    width: `fillsContainer`,
                    height: `fillsContainer`,
                    children: expect.objectContaining({
                      type: ContainerFillingKeyboardAvoidingView,
                      props: {
                        children: expect.objectContaining({
                          type: Text,
                          props: {
                            children: `Example Pop Over Content`,
                          },
                        }),
                      },
                    }),
                  },
                }),
              },
            }),
          },
        }),
      }),
    }),
  ]);

  expect(
    (
      (
        renderer.toTree()
          ?.rendered as ReadonlyArray<TestRenderer.ReactTestRendererTree>
      )[0] as TestRenderer.ReactTestRendererTree
    ).type
  ).toBeAFunctionWithTheStaticProperties({
    pickerButton: { controlStyle },
  });

  renderer.unmount();
});

test(`renders as expected without borders`, () => {
  Dimensions.set({
    window: {
      width: 640,
      height: 480,
      scale: 2.42,
      fontScale: 3.51,
    },
  });

  const controlStyle: ControlStyle = {
    fontFamily: `Example Font Family`,
    fontSize: 37,
    paddingVertical: 12,
    paddingHorizontal: 29,
    blurredValid: {
      textColor: `#FFEE00`,
      placeholderColor: `#E7AA32`,
      backgroundColor: `#32AE12`,
      radius: 5,
      border: null,
    },
    blurredInvalid: {
      textColor: `#99FE88`,
      placeholderColor: `#CACA3A`,
      backgroundColor: `#259284`,
      radius: 10,
      border: null,
    },
    focusedValid: {
      textColor: `#55EA13`,
      placeholderColor: `#273346`,
      backgroundColor: `#CABA99`,
      radius: 3,
      border: null,
    },
    focusedInvalid: {
      textColor: `#ABAADE`,
      placeholderColor: `#47ADAD`,
      backgroundColor: `#32AA88`,
      radius: 47,
      border: null,
    },
    disabledValid: {
      textColor: `#AE2195`,
      placeholderColor: `#FFAAEE`,
      backgroundColor: `#772728`,
      radius: 100,
      border: null,
    },
    disabledInvalid: {
      textColor: `#340297`,
      placeholderColor: `#233832`,
      backgroundColor: `#938837`,
      radius: 2,
      border: null,
    },
  };

  const Component = createFullHeightPopoverComponent(controlStyle);

  const renderer = TestRenderer.create(
    <SafeAreaInsetsContext.Provider
      value={{ top: 16, bottom: 60, left: 53, right: 24 }}
    >
      <Component
        label="Example Button Content"
        placeholder="Example Placeholder"
        valid
        disabled={false}
        children={() => <Text>Example Pop Over Content</Text>}
      />
    </SafeAreaInsetsContext.Provider>
  );

  TestRenderer.act(() => {
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).props[
      `onMeasure`
    ](123, 456, 220, 20, 70, 320);
  });

  TestRenderer.act(() => {
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).props[
      `onPress`
    ]();
  });

  expect(renderer.toTree()?.rendered).toEqual([
    expect.objectContaining({
      props: {
        onMeasure: expect.any(Function),
        onPress: expect.any(Function),
        disabled: false,
        label: `Example Button Content`,
        placeholder: `Example Placeholder`,
        valid: true,
      },
    }),
    expect.objectContaining({
      nodeType: `component`,
      type: SimpleModal,
      props: expect.objectContaining({
        onClose: expect.any(Function),
        children: expect.objectContaining({
          type: SizedHorizontallySymmetricalSafeAreaView,
          props: {
            top: true,
            width: `fillsContainer`,
            height: `fillsContainer`,
            children: expect.objectContaining({
              type: View,
              props: {
                style: [
                  {
                    height: `100%`,
                    backgroundColor: `#CABA99`,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                  },
                  {
                    left: 70,
                    width: 220,
                  },
                ],
                children: expect.objectContaining({
                  type: SizedHorizontallySymmetricalSafeAreaView,
                  props: {
                    bottom: true,
                    left: true,
                    right: true,
                    width: `fillsContainer`,
                    height: `fillsContainer`,
                    children: expect.objectContaining({
                      type: ContainerFillingKeyboardAvoidingView,
                      props: {
                        children: expect.objectContaining({
                          type: Text,
                          props: {
                            children: `Example Pop Over Content`,
                          },
                        }),
                      },
                    }),
                  },
                }),
              },
            }),
          },
        }),
      }),
    }),
  ]);

  expect(
    (
      (
        renderer.toTree()
          ?.rendered as ReadonlyArray<TestRenderer.ReactTestRendererTree>
      )[0] as TestRenderer.ReactTestRendererTree
    ).type
  ).toBeAFunctionWithTheStaticProperties({
    pickerButton: { controlStyle },
  });

  renderer.unmount();
});

test(`renders as expected when invalid without borders`, () => {
  Dimensions.set({
    window: {
      width: 640,
      height: 480,
      scale: 2.42,
      fontScale: 3.51,
    },
  });

  const controlStyle: ControlStyle = {
    fontFamily: `Example Font Family`,
    fontSize: 37,
    paddingVertical: 12,
    paddingHorizontal: 29,
    blurredValid: {
      textColor: `#FFEE00`,
      placeholderColor: `#E7AA32`,
      backgroundColor: `#32AE12`,
      radius: 5,
      border: null,
    },
    blurredInvalid: {
      textColor: `#99FE88`,
      placeholderColor: `#CACA3A`,
      backgroundColor: `#259284`,
      radius: 10,
      border: null,
    },
    focusedValid: {
      textColor: `#55EA13`,
      placeholderColor: `#273346`,
      backgroundColor: `#CABA99`,
      radius: 3,
      border: null,
    },
    focusedInvalid: {
      textColor: `#ABAADE`,
      placeholderColor: `#47ADAD`,
      backgroundColor: `#32AA88`,
      radius: 47,
      border: null,
    },
    disabledValid: {
      textColor: `#AE2195`,
      placeholderColor: `#FFAAEE`,
      backgroundColor: `#772728`,
      radius: 100,
      border: null,
    },
    disabledInvalid: {
      textColor: `#340297`,
      placeholderColor: `#233832`,
      backgroundColor: `#938837`,
      radius: 2,
      border: null,
    },
  };

  const Component = createFullHeightPopoverComponent(controlStyle);

  const renderer = TestRenderer.create(
    <SafeAreaInsetsContext.Provider
      value={{ top: 16, bottom: 60, left: 53, right: 24 }}
    >
      <Component
        label="Example Button Content"
        placeholder="Example Placeholder"
        valid={false}
        disabled={false}
        children={() => <Text>Example Pop Over Content</Text>}
      />
    </SafeAreaInsetsContext.Provider>
  );

  TestRenderer.act(() => {
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).props[
      `onMeasure`
    ](123, 456, 220, 20, 70, 320);
  });

  TestRenderer.act(() => {
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).props[
      `onPress`
    ]();
  });

  expect(renderer.toTree()?.rendered).toEqual([
    expect.objectContaining({
      props: {
        onMeasure: expect.any(Function),
        onPress: expect.any(Function),
        disabled: false,
        label: `Example Button Content`,
        placeholder: `Example Placeholder`,
        valid: false,
      },
    }),
    expect.objectContaining({
      nodeType: `component`,
      type: SimpleModal,
      props: expect.objectContaining({
        onClose: expect.any(Function),
        children: expect.objectContaining({
          type: SizedHorizontallySymmetricalSafeAreaView,
          props: {
            top: true,
            width: `fillsContainer`,
            height: `fillsContainer`,
            children: expect.objectContaining({
              type: View,
              props: {
                style: [
                  {
                    height: `100%`,
                    backgroundColor: `#32AA88`,
                    borderTopLeftRadius: 47,
                    borderTopRightRadius: 47,
                  },
                  {
                    left: 70,
                    width: 220,
                  },
                ],
                children: expect.objectContaining({
                  type: SizedHorizontallySymmetricalSafeAreaView,
                  props: {
                    bottom: true,
                    left: true,
                    right: true,
                    width: `fillsContainer`,
                    height: `fillsContainer`,
                    children: expect.objectContaining({
                      type: ContainerFillingKeyboardAvoidingView,
                      props: {
                        children: expect.objectContaining({
                          type: Text,
                          props: {
                            children: `Example Pop Over Content`,
                          },
                        }),
                      },
                    }),
                  },
                }),
              },
            }),
          },
        }),
      }),
    }),
  ]);

  expect(
    (
      (
        renderer.toTree()
          ?.rendered as ReadonlyArray<TestRenderer.ReactTestRendererTree>
      )[0] as TestRenderer.ReactTestRendererTree
    ).type
  ).toBeAFunctionWithTheStaticProperties({
    pickerButton: { controlStyle },
  });

  renderer.unmount();
});

test(`renders as expected without radius`, () => {
  Dimensions.set({
    window: {
      width: 640,
      height: 480,
      scale: 2.42,
      fontScale: 3.51,
    },
  });

  const controlStyle: ControlStyle = {
    fontFamily: `Example Font Family`,
    fontSize: 37,
    paddingVertical: 12,
    paddingHorizontal: 29,
    blurredValid: {
      textColor: `#FFEE00`,
      placeholderColor: `#E7AA32`,
      backgroundColor: `#32AE12`,
      radius: 0,
      border: {
        width: 4,
        color: `#FF00FF`,
      },
    },
    blurredInvalid: {
      textColor: `#99FE88`,
      placeholderColor: `#CACA3A`,
      backgroundColor: `#259284`,
      radius: 0,
      border: {
        width: 6,
        color: `#9A9A8E`,
      },
    },
    focusedValid: {
      textColor: `#55EA13`,
      placeholderColor: `#273346`,
      backgroundColor: `#CABA99`,
      radius: 0,
      border: {
        width: 5,
        color: `#646464`,
      },
    },
    focusedInvalid: {
      textColor: `#ABAADE`,
      placeholderColor: `#47ADAD`,
      backgroundColor: `#32AA88`,
      radius: 0,
      border: {
        width: 12,
        color: `#98ADAA`,
      },
    },
    disabledValid: {
      textColor: `#AE2195`,
      placeholderColor: `#FFAAEE`,
      backgroundColor: `#772728`,
      radius: 0,
      border: {
        width: 14,
        color: `#5E5E5E`,
      },
    },
    disabledInvalid: {
      textColor: `#340297`,
      placeholderColor: `#233832`,
      backgroundColor: `#938837`,
      radius: 0,
      border: {
        width: 19,
        color: `#573829`,
      },
    },
  };

  const Component = createFullHeightPopoverComponent(controlStyle);

  const renderer = TestRenderer.create(
    <SafeAreaInsetsContext.Provider
      value={{ top: 16, bottom: 60, left: 53, right: 24 }}
    >
      <Component
        label="Example Button Content"
        placeholder="Example Placeholder"
        valid
        disabled={false}
        children={() => <Text>Example Pop Over Content</Text>}
      />
    </SafeAreaInsetsContext.Provider>
  );

  TestRenderer.act(() => {
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).props[
      `onMeasure`
    ](123, 45, 220, 20, 70, 320);
  });

  TestRenderer.act(() => {
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).props[
      `onPress`
    ]();
  });

  expect(renderer.toTree()?.rendered).toEqual([
    expect.objectContaining({
      props: {
        onMeasure: expect.any(Function),
        onPress: expect.any(Function),
        disabled: false,
        label: `Example Button Content`,
        placeholder: `Example Placeholder`,
        valid: true,
      },
    }),
    expect.objectContaining({
      nodeType: `component`,
      type: SimpleModal,
      props: expect.objectContaining({
        onClose: expect.any(Function),
        children: expect.objectContaining({
          type: SizedHorizontallySymmetricalSafeAreaView,
          props: {
            top: true,
            width: `fillsContainer`,
            height: `fillsContainer`,
            children: expect.objectContaining({
              type: View,
              props: {
                style: [
                  {
                    height: `100%`,
                    backgroundColor: `#CABA99`,
                    borderWidth: 5,
                    borderBottomWidth: 0,
                    borderColor: `#646464`,
                  },
                  {
                    left: 70,
                    width: 220,
                  },
                ],
                children: expect.objectContaining({
                  type: SizedHorizontallySymmetricalSafeAreaView,
                  props: {
                    bottom: true,
                    left: true,
                    right: true,
                    width: `fillsContainer`,
                    height: `fillsContainer`,
                    children: expect.objectContaining({
                      type: ContainerFillingKeyboardAvoidingView,
                      props: {
                        children: expect.objectContaining({
                          type: Text,
                          props: {
                            children: `Example Pop Over Content`,
                          },
                        }),
                      },
                    }),
                  },
                }),
              },
            }),
          },
        }),
      }),
    }),
  ]);

  expect(
    (
      (
        renderer.toTree()
          ?.rendered as ReadonlyArray<TestRenderer.ReactTestRendererTree>
      )[0] as TestRenderer.ReactTestRendererTree
    ).type
  ).toBeAFunctionWithTheStaticProperties({
    pickerButton: { controlStyle },
  });

  renderer.unmount();
});

test(`renders as expected when invalid without radius`, () => {
  Dimensions.set({
    window: {
      width: 640,
      height: 480,
      scale: 2.42,
      fontScale: 3.51,
    },
  });

  const controlStyle: ControlStyle = {
    fontFamily: `Example Font Family`,
    fontSize: 37,
    paddingVertical: 12,
    paddingHorizontal: 29,
    blurredValid: {
      textColor: `#FFEE00`,
      placeholderColor: `#E7AA32`,
      backgroundColor: `#32AE12`,
      radius: 0,
      border: {
        width: 4,
        color: `#FF00FF`,
      },
    },
    blurredInvalid: {
      textColor: `#99FE88`,
      placeholderColor: `#CACA3A`,
      backgroundColor: `#259284`,
      radius: 0,
      border: {
        width: 6,
        color: `#9A9A8E`,
      },
    },
    focusedValid: {
      textColor: `#55EA13`,
      placeholderColor: `#273346`,
      backgroundColor: `#CABA99`,
      radius: 0,
      border: {
        width: 5,
        color: `#646464`,
      },
    },
    focusedInvalid: {
      textColor: `#ABAADE`,
      placeholderColor: `#47ADAD`,
      backgroundColor: `#32AA88`,
      radius: 0,
      border: {
        width: 12,
        color: `#98ADAA`,
      },
    },
    disabledValid: {
      textColor: `#AE2195`,
      placeholderColor: `#FFAAEE`,
      backgroundColor: `#772728`,
      radius: 0,
      border: {
        width: 14,
        color: `#5E5E5E`,
      },
    },
    disabledInvalid: {
      textColor: `#340297`,
      placeholderColor: `#233832`,
      backgroundColor: `#938837`,
      radius: 0,
      border: {
        width: 19,
        color: `#573829`,
      },
    },
  };

  const Component = createFullHeightPopoverComponent(controlStyle);

  const renderer = TestRenderer.create(
    <SafeAreaInsetsContext.Provider
      value={{ top: 16, bottom: 60, left: 53, right: 24 }}
    >
      <Component
        label="Example Button Content"
        placeholder="Example Placeholder"
        valid={false}
        disabled={false}
        children={() => <Text>Example Pop Over Content</Text>}
      />
    </SafeAreaInsetsContext.Provider>
  );

  TestRenderer.act(() => {
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).props[
      `onMeasure`
    ](123, 456, 220, 20, 70, 320);
  });

  TestRenderer.act(() => {
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).props[
      `onPress`
    ]();
  });

  expect(renderer.toTree()?.rendered).toEqual([
    expect.objectContaining({
      props: {
        onMeasure: expect.any(Function),
        onPress: expect.any(Function),
        disabled: false,
        label: `Example Button Content`,
        placeholder: `Example Placeholder`,
        valid: false,
      },
    }),
    expect.objectContaining({
      nodeType: `component`,
      type: SimpleModal,
      props: expect.objectContaining({
        onClose: expect.any(Function),
        children: expect.objectContaining({
          type: SizedHorizontallySymmetricalSafeAreaView,
          props: {
            top: true,
            width: `fillsContainer`,
            height: `fillsContainer`,
            children: expect.objectContaining({
              type: View,
              props: {
                style: [
                  {
                    height: `100%`,
                    backgroundColor: `#32AA88`,
                    borderWidth: 12,
                    borderBottomWidth: 0,
                    borderColor: `#98ADAA`,
                  },
                  {
                    left: 70,
                    width: 220,
                  },
                ],
                children: expect.objectContaining({
                  type: SizedHorizontallySymmetricalSafeAreaView,
                  props: {
                    bottom: true,
                    left: true,
                    right: true,
                    width: `fillsContainer`,
                    height: `fillsContainer`,
                    children: expect.objectContaining({
                      type: ContainerFillingKeyboardAvoidingView,
                      props: {
                        children: expect.objectContaining({
                          type: Text,
                          props: {
                            children: `Example Pop Over Content`,
                          },
                        }),
                      },
                    }),
                  },
                }),
              },
            }),
          },
        }),
      }),
    }),
  ]);

  expect(
    (
      (
        renderer.toTree()
          ?.rendered as ReadonlyArray<TestRenderer.ReactTestRendererTree>
      )[0] as TestRenderer.ReactTestRendererTree
    ).type
  ).toBeAFunctionWithTheStaticProperties({
    pickerButton: { controlStyle },
  });

  renderer.unmount();
});

test(`allows introspection when used in a higher-order component`, () => {
  const controlStyle: ControlStyle = {
    fontFamily: `Example Font Family`,
    fontSize: 37,
    paddingVertical: 12,
    paddingHorizontal: 29,
    blurredValid: {
      textColor: `#FFEE00`,
      placeholderColor: `#E7AA32`,
      backgroundColor: `#32AE12`,
      radius: 5,
      border: {
        width: 4,
        color: `#FF00FF`,
      },
    },
    blurredInvalid: {
      textColor: `#99FE88`,
      placeholderColor: `#CACA3A`,
      backgroundColor: `#259284`,
      radius: 10,
      border: {
        width: 6,
        color: `#9A9A8E`,
      },
    },
    focusedValid: {
      textColor: `#55EA13`,
      placeholderColor: `#273346`,
      backgroundColor: `#CABA99`,
      radius: 3,
      border: {
        width: 5,
        color: `#646464`,
      },
    },
    focusedInvalid: {
      textColor: `#ABAADE`,
      placeholderColor: `#47ADAD`,
      backgroundColor: `#32AA88`,
      radius: 47,
      border: {
        width: 12,
        color: `#98ADAA`,
      },
    },
    disabledValid: {
      textColor: `#AE2195`,
      placeholderColor: `#FFAAEE`,
      backgroundColor: `#772728`,
      radius: 100,
      border: {
        width: 14,
        color: `#5E5E5E`,
      },
    },
    disabledInvalid: {
      textColor: `#340297`,
      placeholderColor: `#233832`,
      backgroundColor: `#938837`,
      radius: 2,
      border: {
        width: 19,
        color: `#573829`,
      },
    },
  };

  const FullHeightPopoverComponent =
    createFullHeightPopoverComponent(controlStyle);

  const ParentComponent = () => (
    <FullHeightPopoverComponent
      label="Example Button Content"
      placeholder="Example Placeholder"
      valid
      disabled={false}
      children={() => <Text>Example Pop Over Content</Text>}
    />
  );

  const rendered = <ParentComponent />;

  expect(
    unwrapRenderedFunctionComponent(rendered).type
  ).toBeAFunctionWithTheStaticProperties({
    fullHeightPopover: { controlStyle },
  });
});

test(`treats disabled undefined as disabled false`, () => {
  Dimensions.set({
    window: {
      width: 640,
      height: 480,
      scale: 2.42,
      fontScale: 3.51,
    },
  });

  const controlStyle: ControlStyle = {
    fontFamily: `Example Font Family`,
    fontSize: 37,
    paddingVertical: 12,
    paddingHorizontal: 29,
    blurredValid: {
      textColor: `#FFEE00`,
      placeholderColor: `#E7AA32`,
      backgroundColor: `#32AE12`,
      radius: 5,
      border: {
        width: 4,
        color: `#FF00FF`,
      },
    },
    blurredInvalid: {
      textColor: `#99FE88`,
      placeholderColor: `#CACA3A`,
      backgroundColor: `#259284`,
      radius: 10,
      border: {
        width: 6,
        color: `#9A9A8E`,
      },
    },
    focusedValid: {
      textColor: `#55EA13`,
      placeholderColor: `#273346`,
      backgroundColor: `#CABA99`,
      radius: 3,
      border: {
        width: 5,
        color: `#646464`,
      },
    },
    focusedInvalid: {
      textColor: `#ABAADE`,
      placeholderColor: `#47ADAD`,
      backgroundColor: `#32AA88`,
      radius: 47,
      border: {
        width: 12,
        color: `#98ADAA`,
      },
    },
    disabledValid: {
      textColor: `#AE2195`,
      placeholderColor: `#FFAAEE`,
      backgroundColor: `#772728`,
      radius: 100,
      border: {
        width: 14,
        color: `#5E5E5E`,
      },
    },
    disabledInvalid: {
      textColor: `#340297`,
      placeholderColor: `#233832`,
      backgroundColor: `#938837`,
      radius: 2,
      border: {
        width: 19,
        color: `#573829`,
      },
    },
  };

  const Component = createFullHeightPopoverComponent(controlStyle);

  const renderer = TestRenderer.create(
    <SafeAreaInsetsContext.Provider
      value={{ top: 16, bottom: 60, left: 53, right: 24 }}
    >
      <Component
        label="Example Button Content"
        placeholder="Example Placeholder"
        valid
        disabled={undefined}
        children={() => <Text>Example Pop Over Content</Text>}
      />
    </SafeAreaInsetsContext.Provider>
  );

  expect(renderer.toTree()?.rendered).toEqual(
    expect.objectContaining({
      props: {
        onMeasure: expect.any(Function),
        onPress: expect.any(Function),
        disabled: false,
        label: `Example Button Content`,
        placeholder: `Example Placeholder`,
        valid: true,
      },
    })
  );

  expect(
    (renderer.toTree()?.rendered as TestRenderer.ReactTestRendererTree).type
  ).toBeAFunctionWithTheStaticProperties({
    pickerButton: { controlStyle },
  });

  renderer.unmount();
});
