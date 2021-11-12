# `react-native-app-helpers`

General tools we use to build React Native applications.

## Installation

```bash
npm install --save react-native-app-helpers
```

```tsx
import { createTextComponent } from "react-native-app-helpers";
```

## Exports

### Components

- [Aligned](./components/Aligned/readme.md)
- [ContainerFillingScrollView](./components/ContainerFillingScrollView/readme.md)
- [createButtonComponent](./components/createButtonComponent/readme.md)
- [createCardComponent](./components/createCardComponent/readme.md)
- [createDropDownComponent](./components/createDropDownComponent/readme.md)
- [createFiniteStateMachineRoutingComponent](./components/createFiniteStateMachineRoutingComponent/readme.md)
- [createFixedWidthComponent](./components/createFixedWidthComponent/readme.md)
- [createFlatColorBackgroundComponent](./components/createFlatColorBackgroundComponent/readme.md)
- [createHeaderBodyFooterComponent](./components/createHeaderBodyFooterComponent/readme.md)
- [createImageBackgroundComponent](./components/createImageBackgroundComponent/readme.md)
- [createInputComponent](./components/createInputComponent/readme.md)
- [createPaddingComponent](./components/createPaddingComponent/readme.md)
- [createSessionStoreManagerComponent](./components/createSessionStoreManagerComponent/readme.md)
- [createSidebarComponent](./components/createSidebarComponent/readme.md)
- [createStackComponent](./components/createStackComponent/readme.md)
- [createStackRoutingComponent](./components/createStackRoutingComponent/readme.md)
- [createStateStoreManagerComponent](./components/createStateStoreManagerComponent/readme.md)
- [createTabRoutingComponent](./components/createTabRoutingComponent/readme.md)
- [createTextComponent](./components/createTextComponent/readme.md)
- [Hitbox](./components/Hitbox/readme.md)
- [Row](./components/Row/readme.md)
- [SimpleModal](./components/SimpleModal/readme.md)

### Hooks

- [useEventRefresh](./hooks/useEventRefresh/readme.md)
- [useMeasure](./hooks/useMeasure/readme.md)
- [useRefresh](./hooks/useRefresh/readme.md)

### Services

- [SessionStore](./services/SessionStore/readme.md)
- [StateStore](./services/StateStore/readme.md)

### Types

- [BorderStyle](./types/BorderStyle/readme.md)
- [ButtonStateStyle](./types/ButtonStateStyle/readme.md)
- [ButtonStyle](./types/ButtonStyle/readme.md)
- [ControlStateStyle](./types/ControlStateStyle/readme.md)
- [ControlStyle](./types/ControlStyle/readme.md)
- [FiniteStateMachineRouterState](./types/FiniteStateMachineRouterState/readme.md)
- [Json](./types/Json/readme.md)
- [Route](./types/Route/readme.md)
- [RouteParameters](./types/RouteParameters/readme.md)
- [RouteTable](./types/RouteTable/readme.md)
- [StackRouterState](./types/StackRouterState/readme.md)
- [TabRoute](./types/TabRoute/readme.md)
- [TabRouteTable](./types/TabRouteTable/readme.md)

### Utilities

- [flattenRenderedToArray](./utilities/flattenRenderedToArray/readme.md)
- [intercalateRendered](./utilities/intercalateRendered/readme.md)
- [setRenderedKey](./utilities/setRenderedKey/readme.md)
- [unwrapRenderedFunctionComponent](./utilities/unwrapRenderedFunctionComponent/readme.md)

## Concepts

### Component factory methods

Most components here are wrapped in a factory method which is passed all
information which is not expected to change at runtime.  This allows for heavy
caching of styles which should help improve performance (see the
[React Native documentation](https://reactnative.dev/docs/stylesheet)).

To use them, you would do something similar to the following:

```tsx
import { createTextComponent } from "react-native-app-helpers";

const ExampleText = createTextComponent(`example`, `red`, 12, `left`, false);

const ExampleScreen = () => (
  <ExampleText>
    Hello World!  (in the "example" font, in red, at size 12, left-aligned)
  </ExampleText>
);
```

### Line height

All components herein which render text apply a line-height of 1.4x the font
size.  This is done to ensure consistent rendering between iOS and Android, the
latter of which defaults to having more space beneath text than above.

### Spacing

No components are to include any external padding or spacing as this is quite
often a contextual matter.  Instead, use wrapping components (which provide
internal padding/spacing).

### Limited use of internal state

As few components as possible rely on any form of internal state; where possible
(and practical) all state is passed in via props, and changes are suggested to
the parent component through callbacks (also provided via props).  This makes
components far more reusable.
