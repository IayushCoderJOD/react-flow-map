import { Controls, MiniMap, ReactFlow, addEdge, useEdgesState, useNodesState } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import DefaultImage from "../src/asset/DefaultImage.svg";
import { Option2SVG, Option3SVG, Option4SVG, Option5SVG, Option6SVG, Option7SVG, Option8SVG, OptionDefaultSVG } from './customflows/Constant';
import CustomEdge from './customflows/CustomEdge';
import CustomNode from './customflows/CustomNode';
import Dashboard from './customflows/Dashboard';
import DatabaseNode from './customflows/DatabaseNode';
import Frame from './customflows/Frame';
import LShapedFlow from './customflows/LSHapedFlow';
import { PaymentInit } from './customflows/PaymentInit';
import Pipe from './customflows/Pipe';
import ThreeWayPipe from './customflows/ThreeWayPipe';

const initEdges = [];
const edgeTypes = {
    'custom-edge': CustomEdge,
};

const initNodes = [
    {
        id: '1',
        data: {
            src: DefaultImage,
            text: "Raw Data"
        },
        position: { x: 0, y: 220 },
        type: 'custom',
    },
];

function Flow() {

    const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);
    // const [addNode, setAddNode] = useState(false);
    const [showAddNodeForm, setShowAddNodeForm] = useState(false)
    const [selectedNodeType, setSelectedNodeType] = useState('option1');
    const [formPosition, setFormPosition] = useState({ x: 0, y: 0 });
    const [nodeClicked, setNodeClicked] = useState({});
    const [frameAdded, setFrameAdded] = useState(false);
    const [lastSelectedNodeType, setLastSelectedNodeType] = useState(null);
    const [currentNodeId, setCurrentNodeId] = useState(null);

    // Below code is handling the adding of new node consecutively
    const latestNodeRef = useRef(null);
    useEffect(() => {
        if (nodes.length > 0) {
            const latestNode = document.querySelector(`[data-id="${nodes[nodes.length - 1].id}"]`);
            latestNodeRef.current = latestNode?.getBoundingClientRect();
        }
    }, [nodes]);


    const onConnect = useCallback((connection) => {
        console.log('Connection attempted:', connection);
        const edge = { ...connection, animated: true, id: `${edges.length + 1}` }
        setEdges(prevEdges => addEdge(edge, prevEdges));
    }, [edges, setEdges]);


    const addNewNode = () => {
        let newX;
        if (lastSelectedNodeType === 'option4') {
            if (nodes.length > 2) {
                const secondLastNode = document.querySelector(`[data-id="${nodes[nodes.length - 2].id}"]`);
                newX = secondLastNode?.getBoundingClientRect().right || 0;
                newX = newX + 20

            } else {
                const lastNode = document.querySelector(`[data-id="${nodes[nodes.length - nodes.length].id}"]`);
                newX = lastNode?.getBoundingClientRect().right || 0;
                newX = newX + 20
            }
        } else {
            const lastNode = document.querySelector(`[data-id="${nodes[nodes.length - 1].id}"]`);
            newX = lastNode?.getBoundingClientRect().right || 0;
        }
        let svgContent;

        switch (selectedNodeType) {
            case 'option2':
                svgContent = Option2SVG;
                break;
            case 'option3':
                svgContent = Option3SVG;
                break;
            case 'option4':
                svgContent = Option4SVG;
                break;
            case 'option5':
                svgContent = Option5SVG;
                break;
            case 'option6':
                svgContent = Option6SVG;
                break;
            case 'option7':
                svgContent = Option7SVG;
                break;
            case 'option8':
                svgContent = Option8SVG;
                break;
            default:
                svgContent = OptionDefaultSVG;
                break;
        }

        switch (selectedNodeType) {
            case 'option4': {
                const newNode = {
                    id: `${nodes.length + 1}`,
                    data: {
                        svg: svgContent,
                        pos: "top",
                        text: "hey there"
                    },
                    position: { x: 450, y: 190 },
                    type: "Frame"
                };
                setNodes([...nodes, newNode]);
                // setAddNode(false);
                setShowAddNodeForm(false);
                setNodeClicked((prev) => ({ ...prev, [currentNodeId]: true }));
                setCurrentNodeId(null);
                setLastSelectedNodeType(selectedNodeType);
                break;
            }
            case 'option5': {
                const newNode = {
                    id: `${nodes.length + 1}`,
                    data: {
                        svg: svgContent,
                        pos: "top",
                        text: "Modbus"
                    },
                    position: { x: newX - 21, y: 270 },
                    type: "Pipe"
                };
                setNodes([...nodes, newNode]);
                // setAddNode(false);
                setShowAddNodeForm(false);
                setNodeClicked((prev) => ({ ...prev, [currentNodeId]: true }));
                setCurrentNodeId(null);
                setLastSelectedNodeType(selectedNodeType);
                break;
            }
            case 'option6': {
                const newNode = {
                    id: `${nodes.length + 1}`,
                    data: {
                        svg: svgContent,
                        pos: "top",
                        text: "Protocol"
                    },
                    position: { x: newX - 21, y: 260 },
                    type: "ThreeWayPipe"
                };
                setNodes([...nodes, newNode]);
                // setAddNode(false);
                setShowAddNodeForm(false);
                setNodeClicked((prev) => ({ ...prev, [currentNodeId]: true }));
                setCurrentNodeId(null);
                setLastSelectedNodeType(selectedNodeType);
                break;
            }
            case 'option7': {
                const newNode = {
                    id: `${nodes.length + 1}`,
                    data: {
                        svg: svgContent,
                        pos: "top",
                        text: "Data Expl"
                    },
                    position: { x: newX - 284, y: 297 },
                    type: "LShapedFlow"
                };
                setNodes([...nodes, newNode]);
                setLastSelectedNodeType(selectedNodeType);
                // setAddNode(false);
                setShowAddNodeForm(false);
                setCurrentNodeId(null);
                break;
            }
            case 'option8': {
                const newNode = {
                    id: `${nodes.length + 1}`,
                    data: {
                        svg: svgContent,
                        pos: "top",
                        text: "hey there"
                    },
                    position: { x: newX - 610, y: -80 },
                    type: "Dashboard"
                };
                setNodes([...nodes, newNode]);
                // setAddNode(false);
                setShowAddNodeForm(false);
                setNodeClicked((prev) => ({ ...prev, [currentNodeId]: true }));
                setCurrentNodeId(null);
                setLastSelectedNodeType(selectedNodeType);
                break;
            }
            default: {

                const newNode = {
                    id: `${nodes.length + 1}`,
                    data: {
                        svg: svgContent,
                        pos: "top",
                        text: "hey there"
                    },
                    position: { x: newX - 20, y: 260 },
                    type: "database"
                };
                setNodes([...nodes, newNode]);
                // setAddNode(false);
                setShowAddNodeForm(false);
                setNodeClicked((prev) => ({ ...prev, [currentNodeId]: true }));
                setCurrentNodeId(null);
                setLastSelectedNodeType(selectedNodeType);
            };
        }
    }

    const handleAddNodeClick = (nodeId, event) => {
        const { clientX: x, clientY: y } = event;
        setCurrentNodeId(nodeId);
        setFormPosition({ x, y });
        setShowAddNodeForm(true);
    };

    return (
        <div className="h-screen w-screen">
            {showAddNodeForm && (
                <div
                    className="h-fit z-50 absolute text-xs w-fit p-3 bg-blue-200 shadow-xl rounded-2xl"
                    style={{ top: formPosition.y, left: formPosition.x }}
                >
                    <label className="font-semibold text-xs mt-4 block" htmlFor="dropdown">Nodes- </label>
                    <select
                        onChange={(e) => setSelectedNodeType(e.target.value)}
                        className="bg-gray-200 w-60 p-1 rounded-xl border-black border-2 text-black mt-2"
                        id="dropdown"
                    >
                        <option value="option1">Select</option>
                        <option value="option2">Database</option>
                        <option value="option3">Socket</option>
                        <option value="option4">Frame</option>
                        <option value="option5">Pipe</option>
                        <option value="option6">3 way connection</option>
                        <option value="option7">L shaped connection</option>
                        <option value="option8">Dashboard</option>
                    </select>
                    <button className="bg-black w-[30%] text-white p-2 rounded-xl mt-4" onClick={addNewNode}>Add</button>
                </div>
            )}
            <ReactFlow
                nodes={nodes.map(node => {
                    const shouldUpdateState = selectedNodeType !== 'option4';
                    return {
                        ...node,
                        data: {
                            ...node.data,
                            onAddNodeClick: (event) => handleAddNodeClick(node.id, event),
                            hasNodeBeenAdded: shouldUpdateState ? !!nodeClicked[node.id] : node.data.hasNodeBeenAdded,
                        },
                    }
                })}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                edgeTypes={edgeTypes}
                onConnect={onConnect}
                nodeTypes={{ custom: CustomNode, database: DatabaseNode, Dashboard: Dashboard, LShapedFlow, PaymentInit, Pipe: Pipe, ThreeWayPipe: ThreeWayPipe, Frame: Frame }}
            >
                <Controls />
                <MiniMap nodeStrokeWidth={3} zoomable pannable />
            </ReactFlow>
        </div>
    );
}

export default Flow;











