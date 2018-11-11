// API
export const API_KEY = process.env.REACT_APP_API_KEY!;
export const API_URL = process.env.REACT_APP_API_URL!;

// Tensorflow
export const getLearningRate = () => 0.0001;
export const getBatchSizeFraction = () => 0.4;
export const getEpochs = () => 20;
export const getDenseUnits = () => 100;
export const MODEL_URL = process.env.REACT_APP_MODEL_URL!;
export const MOBILENET_URL = process.env.REACT_APP_MOBILENET_URL!;
export const MOBILENET_LAYER = process.env.REACT_APP_MOBILENET_LAYER!;
