// import React from 'react'
// import { Provider } from 'react-redux'
// import configureMockStore from 'redux-mock-store'
// import fs from 'fs'
// import { shallow, mount } from 'enzyme'
// import expect, { spyOn, createSpy } from 'expect'
// import {flattenXML, hydrateXML} from 'squash-xml-json'
//
// import * as containers from '../../containers'
// import * as components from '../../components'
//
// const mockStore = configureMockStore()
//
// describe('Component: <Module />', () => {
//
//     const onClick = expect.createSpy();
//     let Component;
//
//     beforeEach(() => {
//   		Component = shallow(
//   			<components.Module
//   				onClick={onClick}
//   				selected={true}
//           ident={"core"}
//   			/>
//   		);
//     });
//
//     it('should render', () => {
//   		expect(Component.length).toBeTruthy();
//   		expect(Component.find('li span').length).toEqual(1);
//       expect(Component.find('li span').text()).toEqual("core");
//   	});
//
//     it('should call onClick when clicked', () => {
//   		Component.find('li span').simulate('click');
//   		expect(onClick).toHaveBeenCalled();
//   	});
//
// })
//
// describe('Component: <ModuleList />', () => {
//
//     const onModuleClick = expect.createSpy();
//     let Component;
//
//     beforeEach(() => {
//   		Component = shallow(
//   			<components.ModuleList
//   				modules={[{
//             selected: true,
//             ident: "core"
//           },{
//             selected: true,
//             ident: "tei"
//           }]}
//   				onModuleClick={onModuleClick}
//   			/>
//   		);
//     });
//
//     it('should render', () => {
//   		expect(Component.length).toBeTruthy();
//   		expect(Component.find('ul').length).toEqual(1);
//   	});
//
// })
//
// describe('Component: <Element />', () => {
//
//     const onClick = expect.createSpy();
//     let Component;
//
//     beforeEach(() => {
//   		Component = shallow(
//   			<components.Element
//   				onClick={onClick}
//   				selected={true}
//           ident={"p"}
//   			/>
//   		);
//     });
//
//     it('should render', () => {
//   		expect(Component.length).toBeTruthy();
//   		expect(Component.find('li span').length).toEqual(1);
//       expect(Component.find('li span').text()).toEqual("p");
//   	});
//
//     it('should call onClick when clicked', () => {
//   		Component.find('li span').simulate('click');
//   		expect(onClick).toHaveBeenCalled();
//   	});
//
// })
//
// describe('Component: <ElementList />', () => {
//
//     const onElementClick = expect.createSpy();
//     let Component;
//
//     beforeEach(() => {
//   		Component = shallow(
//   			<components.ElementList
//   				elements={[{
//             selected: true,
//             ident: "p"
//           },{
//             selected: true,
//             ident: "list"
//           }]}
//   				onElementClick={onElementClick}
//   			/>
//   		);
//     });
//
//     it('should render', () => {
//   		expect(Component.length).toBeTruthy();
//   		expect(Component.find('ul').length).toEqual(1);
//   	});
//
// })
//
// describe('Container: <FullModuleList />', () => {
//   let odd = `<schemaSpec><moduleRef key="core"/></schemaSpec>`
//   let json = flattenXML(odd)
//   const store = mockStore({
//      odd: {
//        customization: { json : json },
//        localsource: { json : P5 }
//      },
//      selectedOdd: ''
//   })
//
//   let Component, ModuleListComponent;
//
//   beforeEach(() => {
//   	const wrapper = mount(
//   		<Provider store={store}>
//   			<containers.FullModuleList />
//   		</Provider>
//   	);
//
//   	Component = wrapper.find(containers.FullModuleList);
//   	ModuleListComponent = Component.find(components.ModuleList);
//   });
//
//   it('should render', () => {
//     expect(Component.length).toBeTruthy();
//     expect(ModuleListComponent.length).toBeTruthy();
//   })
//
// })
//
// describe('Container: <FullElementList />', (done) => {
//
//   it('should render all elements from moduleRef', () => {
//
//     const onElementClick = expect.createSpy();
//
//     let odd = `<schemaSpec><moduleRef key="core"/></schemaSpec>`
//     let json = flattenXML(odd)
//     const store = mockStore({
//        odd: {
//          customization: { json : json },
//          localsource: { json : P5 }
//        },
//        selectedOdd: ''
//     })
//
// 		const wrapper = mount(
// 			<Provider store={store}>
// 				<containers.FullElementList />
// 			</Provider>
// 		);
//
// 		let Component = wrapper.find(containers.FullElementList);
// 		let ElementListComponent = Component.find(components.ElementList);
//     let elements = ElementListComponent.find(components.Element);
//
//     expect(Component.length).toBeTruthy();
// 	  expect(ElementListComponent.length).toBeTruthy();
//   })
// })
