import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'relaunch'

export const ExampleComponent = () => (
  <div>
    <Breadcrumb>
      <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
      <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
      <BreadcrumbItem active>Data</BreadcrumbItem>
    </Breadcrumb>
  </div>
)
