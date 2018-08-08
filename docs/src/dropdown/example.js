import React from 'react'
import { DropDown, DropDownDivider, DropDownItem } from 'relaunch'

export const Example = () => (
  <div>
    <DropDownDivider />
    <DropDown text="Dropdown">
      <DropDownItem>
        <a href="#">Action</a>
      </DropDownItem>
      <DropDownItem>
        <a href="#">Another action</a>
      </DropDownItem>
      <DropDownItem>
        <a href="#">Something else here</a>
      </DropDownItem>
      <DropDownDivider />
      <DropDownItem>
        <a href="#">Separated link</a>
      </DropDownItem>
    </DropDown>
  </div>
)
