// Copyright 2017-2019 @polkadot/ui-keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

<template>
  <div id="keypair">
    <wrapper>
      <div className="icon">
      </div>
      <!-- <div :className="`name ${isUppercase ? 'uppercase' : 'normalcase'}`"> -->
      <div className="name">
        {{name}}
      </div>
      <div className="address">
        {{address}}
      </div>
    </wrapper>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// @ts-ignore
import styled from 'vue-styled-components';

const wrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    position: relative;
    white-space: nowrap;

    > .address {
      display: inline-block;
      flex: 1;
      font-family: monospace;
      margin-left: 1rem;
      opacity: 0.5;
      overflow: hidden;
      text-align: right;
      text-overflow: ellipsis;
    }

    > .icon {
      position: absolute;
      top: -9px;
      left: 0;
    }

    > .name {
      display: inline-block;
      flex: 1 0;
      margin-left: 3rem;
      overflow: hidden;
      text-overflow: ellipsis;

      &.uppercase {
        text-transform: uppercase;
      }
    }
  `;

@Component({
  components: {
    wrapper,
  }
})
export default class Keypair extends Vue {
  @Prop(String) public address!: string;
  // @Prop(String) public className!: string;
  @Prop({ default: 'true'}) public isUpperCase!: boolean;
  @Prop({ default: 'no-name'}) public name!: string;
  // @Prop(String) public style!: string;
}
</script>
