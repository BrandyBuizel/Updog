// Auto-generated
let project = new Project('updog');

project.addSources('Sources');
project.addLibrary("F:/Program Files/Armory/armsdk//armory");
project.addLibrary("F:/Program Files/Armory/armsdk//iron");
project.addParameter("--macro include('armory.trait')");
project.addParameter("--macro include('armory.trait.internal')");
project.addParameter('armory.trait.internal.DebugConsole');
project.addParameter("--macro keep('armory.trait.internal.DebugConsole')");
project.addParameter('arm.node.CorgiHop');
project.addParameter("--macro keep('arm.node.CorgiHop')");
project.addParameter('arm.CorgiTrait');
project.addParameter("--macro keep('arm.CorgiTrait')");
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/bloom_pass.frag.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/blur_adaptive_pass.frag.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/blur_bilat_blend_pass.frag.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/blur_bilat_pass.frag.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/blur_edge_pass.frag.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/blur_gaus_pass.frag.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/compositor_pass.frag.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/compositor_pass.vert.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/deferred_indirect.frag.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/deferred_indirect.vert.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/deferred_light.frag.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/deferred_light_quad.frag.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/pass.vert.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/pass_copy.frag.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/pass_lamp_volume.vert.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/pass_viewray.vert.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/pass_viewray2.vert.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/smaa_blend_weight.frag.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/smaa_blend_weight.vert.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/smaa_edge_detect.frag.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/smaa_edge_detect.vert.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/smaa_neighborhood_blend.frag.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/smaa_neighborhood_blend.vert.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/ssao_pass.frag.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/ssr_pass.frag.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/taa_pass.frag.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/volumetric_light.frag.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/volumetric_light_quad.frag.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/world_pass.frag.glsl');
project.addShaders('K:/Animations/Updog/build_updog/compiled/Shaders/world_pass.vert.glsl');
project.addShaders('build_updog/compiled/Shaders//Material_001_mesh.frag.glsl');
project.addShaders('build_updog/compiled/Shaders//Material_001_mesh.vert.glsl');
project.addShaders('build_updog/compiled/Shaders//Material_001_shadowmap.vert.glsl');
project.addShaders('build_updog/compiled/Shaders//Material_002_mesh.frag.glsl');
project.addShaders('build_updog/compiled/Shaders//Material_mesh.frag.glsl');
project.addShaders('build_updog/compiled/Shaders//Material_mesh.vert.glsl');
project.addShaders('build_updog/compiled/Shaders//Material_shadowmap.frag.glsl');
project.addShaders('build_updog/compiled/Shaders//Material_shadowmap.vert.glsl');
project.addAssets("build_updog/compiled/Shaders/Material_001_data.arm", { notinlist: true });
project.addAssets("build_updog/compiled/Shaders/Material_002_data.arm", { notinlist: true });
project.addAssets("build_updog/compiled/Shaders/Material_data.arm", { notinlist: true });
project.addAssets("build_updog/compiled/Shaders/shader_datas.arm", { notinlist: true });
project.addAssets("F:/Program Files/Armory/armsdk/armory/Assets/blue_noise64.png", { notinlist: true });
project.addAssets("F:/Program Files/Armory/armsdk/armory/Assets/brdf.png", { notinlist: true });
project.addAssets("F:/Program Files/Armory/armsdk/armory/Assets/noise8.png", { notinlist: true });
project.addAssets("F:/Program Files/Armory/armsdk/armory/Assets/smaa_area.png", { notinlist: true });
project.addAssets("F:/Program Files/Armory/armsdk/armory/Assets/smaa_search.png", { notinlist: true });
project.addAssets("K:/Animations/Updog/build_updog/compiled/Assets/Scene.arm", { notinlist: true });
project.addAssets("K:/Animations/Updog/build_updog/compiled/Assets/meshes/action_CameraAction.arm", { notinlist: true });
project.addAssets("K:/Animations/Updog/build_updog/compiled/Assets/meshes/action_CorgiAction.arm", { notinlist: true });
project.addAssets("K:/Animations/Updog/build_updog/compiled/Assets/meshes/action_Plane.001Action.arm", { notinlist: true });
project.addAssets("K:/Animations/Updog/build_updog/compiled/Assets/meshes/action_SunAction.001.arm", { notinlist: true });
project.addAssets("K:/Animations/Updog/build_updog/compiled/Assets/meshes/action_SunAction.arm", { notinlist: true });
project.addAssets("K:/Animations/Updog/build_updog/compiled/Assets/meshes/mesh_Cylinder.007.arm", { notinlist: true });
project.addAssets("K:/Animations/Updog/build_updog/compiled/Assets/meshes/mesh_Plane.004.arm", { notinlist: true });
project.addAssets("K:/Animations/Updog/build_updog/compiled/Assets/meshes/mesh_Plane.arm", { notinlist: true });
project.addAssets("build_updog/compiled/Assets/envmaps/World_irradiance.arm", { notinlist: true });
project.addShaders('F:/Program Files/Armory/armsdk//armory/Shaders/debug_draw/**');
project.addLibrary("F:/Program Files/Armory/armsdk//lib/zui");
project.addAssets("F:/Program Files/Armory/armsdk//armory/Assets/droid_sans.ttf", { notinlist: false });
project.addDefine('arm_deferred');
project.addDefine('arm_csm');
project.addDefine('rp_hdr');
project.addDefine('rp_renderer=Deferred');
project.addDefine('rp_shadowmap');
project.addDefine('rp_shadowmap_size=4096');
project.addDefine('rp_background=World');
project.addDefine('rp_render_to_texture');
project.addDefine('rp_compositornodes');
project.addDefine('rp_compositordepth');
project.addDefine('rp_antialiasing=TAA');
project.addDefine('arm_veloc');
project.addDefine('arm_taa');
project.addDefine('rp_supersampling=2');
project.addDefine('rp_gi=Off');
project.addDefine('rp_ssgi=SSAO');
project.addDefine('rp_volumetriclight');
project.addDefine('rp_blending');
project.addDefine('rp_bloom');
project.addDefine('rp_ssr');
project.addDefine('rp_gbuffer2');
project.addDefine('arm_shaderload');
project.addDefine('arm_soundcompress');
project.addDefine('arm_debug');
project.addDefine('arm_ui');
project.addDefine('arm_fast');


resolve(project);
