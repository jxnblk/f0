
// SVG
import Svg from './Svg'
import Line from './Line'
import Area from './Area'
import Bar from './Bar'
import Rules from './Rules'
  import Rule from './Rule'
// Dots??

// HTML
import Chart from './Chart'
import Div from './Div'
import Label from './Label'
import Axis from './Axis'
import DataLabels from './DataLabels'

// Deprecate
  import Group from './Group'
  import XAxis from './XAxis'
  import Labels from './Labels'
  export { default as Group } from './Group'

// HOC
import getScale from './get-scale'
import withScale from './withScale'


export { default as Svg } from './Svg'
export { default as Line } from './Line'
export { default as Area } from './Area'
export { default as Bar } from './Bar'
export { default as Rule } from './Rule'
export { default as Rules } from './Rules'

export { default as Chart } from './Chart'
export { default as Div } from './Div'
export { default as Label } from './Label'
export { default as Axis } from './Axis'
export { default as DataLabels } from './DataLabels'

  export { default as XAxis } from './XAxis'
  export { default as Labels } from './Labels'

export { default as getScale } from './get-scale'
export { default as withScale } from './withScale'

export default {
  Line,
  Area,
  Bar,
  Chart,
  Group,
  Rule,
  Rules,
  Div,
  Label,
    Labels,
  DataLabels,
  getScale,
  withScale
}

